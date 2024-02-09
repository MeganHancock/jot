import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"

class JotsService {

    constructor() {

    }

    createNewJot(jotFormData) {
        // console.log('jots service hooked up')
        let newJot = new Jot(jotFormData)
        // console.log('jot form new', newJot)
        AppState.jots.push(newJot)
        newJot = AppState.activeJot
    }

    setActiveJot(jotId) {
        const foundJot = AppState.jots.find(jot => jot.id == jotId)
        AppState.activeJot = foundJot
    }
}

export const jotsService = new JotsService()