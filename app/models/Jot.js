import { generateId } from "../utils/GenerateId.js"


export class Jot {

    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
        this.jotBody = data.jotBody
        this.color = data.color
    }

}