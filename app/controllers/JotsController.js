import { AppState } from "../AppState.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawListOfCreatedJots() {
    const jots = AppState.jots
    let htmlString = ''
    jots.forEach(jot => htmlString += jot.ListOfJotsHTMLTemplate)
    console.log('drawing jot')
    setHTML('listOfCreatedJots', htmlString)

}

function _drawActiveJot() {
    const jot = AppState.activeJot
    console.log('drawing active jot', jot)
    setHTML('activeJotArea', jot.ActiveJotHTMLTemplate)

}


export class JotsController {

    constructor() {
        console.log('JotController hooked up')
        _drawListOfCreatedJots()
        AppState.on('jots', _drawListOfCreatedJots)
        AppState.on('activeJot', _drawActiveJot)
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

        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    setActiveJot(jotId) {
        console.log('setting active jot', jotId)
        jotsService.setActiveJot(jotId)

    }
}