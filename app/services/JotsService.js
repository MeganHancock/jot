import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"

class JotsService {

    constructor() {

    }

    createNewJot(jotFormData) {
        // console.log('jots service hooked up')
        const newJot = new Jot(jotFormData)
        // console.log('jot form new', newJot)
        AppState.jots.push(newJot)
    }
}

export const jotsService = new JotsService()