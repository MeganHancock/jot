import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class JotsController {

    constructor() {
        console.log('JotController hooked up')
    }

    createNewJot() {
        try {
            event.preventDefault()
            // console.log('createNewJot hooked up')
            const form = event.target
            // console.log('form', form)
            const jotFormData = getFormData(form)
            // console.log('form data', jotFormData)
            jotsService.createNewJot(jotFormData)

        } catch (error) {
            console.error(error);
            Pop.error(error)
        }

    }
}