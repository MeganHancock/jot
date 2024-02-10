import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


function _drawListOfCreatedJots() {
    const jots = AppState.jots
    let htmlString = ''
    jots.forEach(jot => htmlString += jot.ListOfJotsHTMLTemplate)
    console.log('drawing jot')
    setHTML('listOfCreatedJots', htmlString)
    // setText('jotCount', AppState.jotCount = AppState.jots.length)
    // _drawJotCount()
}

function _drawActiveJot() {
    const jot = AppState.activeJot
    console.log('drawing active jot', jot)
    setHTML('activeJotArea', jot.ActiveJotHTMLTemplate)

}

function _drawJotCount() {
    setText('jotCount', AppState.jots.length)
}




export class JotsController {

    constructor() {
        console.log('JotController hooked up')
        _drawListOfCreatedJots()
        AppState.on('jots', _drawListOfCreatedJots)
        AppState.on('activeJot', _drawActiveJot)
        // AppState.on('jotCount', _drawJotCount)
        // _drawJotCount()
        _drawJotCount()

    }

    createNewJot() {
        try {
            event.preventDefault()
            console.log('createNewJot hooked up')
            const form = event.target
            console.log('form', form)
            const jotFormData = getFormData(form)
            console.log('form data', jotFormData)
            jotsService.createNewJot(jotFormData)
            setText('jotCount', AppState.jots.length)
            // @ts-ignore
            form.reset()

        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    setActiveJot(jotId) {
        console.log('setting active jot', jotId)
        document.getElementById('activeJotArea').style.display = "block";
        jotsService.setActiveJot(jotId)

    }

    updateJot() {
        event.preventDefault()
        console.log('is blur working')
        const jotTextElement = document.getElementById('jotBody')
        console.log(jotTextElement)
        // @ts-ignore
        const updatedJotBody = jotTextElement.value
        console.log(updatedJotBody);
        jotsService.updateJot(updatedJotBody)
    }

    async removeJot(jotId) {
        console.log('removing jot with this id', jotId)
        const wantsToRemove = await Pop.confirm('You worked hard on this Jot, are you sure you want to delete it? ')
        if (!wantsToRemove) {
            return
        }
        document.getElementById('activeJotArea').style.display = "none";
        jotsService.removeJot(jotId)
        setText('jotCount', AppState.jots.length)


    }


}