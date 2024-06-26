import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"


function _saveJots() {
    saveState('jots', AppState.jots)
    // saveState('jotCount', AppState.jotCount)
}
function _loadJots() {
    const jotsFromLocalStorage = loadState('jots', [Jot])
    // const jotCountFromLocalStorage = loadState('jotCount', jotCount)
    AppState.jots = jotsFromLocalStorage

    // AppState.jotCount = jotCountFromLocalStorage
}

class JotsService {

    constructor() {
        _loadJots()
    }

    createNewJot(jotFormData) {
        // console.log('jots service hooked up')
        let newJot = new Jot(jotFormData)

        // console.log('jot form new', newJot)
        AppState.jots.push(newJot)
        newJot = AppState.activeJot
        console.log('jot count', AppState.jots.length)

        _saveJots()

    }

    setActiveJot(jotId) {
        const foundJot = AppState.jots.find(jot => jot.id == jotId)
        AppState.activeJot = foundJot
    }

    /**
     * @param {any} updatedJotBody
     */
    updateJot(updatedJotBody) {
        // debugger
        const activeJot = AppState.activeJot
        console.log('new jot', activeJot)
        activeJot.jotBody = updatedJotBody
        activeJot.lastUpdated = new Date()
        _saveJots()

        AppState.emit('activeJot')
    }

    removeJot(jotId) {
        const jotIndex = AppState.jots.findIndex(jot => jot.id == jotId)
        console.log('found jot index', jotIndex)
        if (jotIndex == -1) {
            throw new Error('jot index -1')
        }
        AppState.jots.splice(jotIndex, 1)
        AppState.emit('activeJot')
        // console.log('jot count', AppState.jotCount)
        _saveJots()

    }


}

export const jotsService = new JotsService()