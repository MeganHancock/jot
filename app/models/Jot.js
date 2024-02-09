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

    get ActiveJotHTMLTemplate() {
        return `
    
    <div class="row justify-content-between">

    <div class="col-4 d-flex flex-column align-items-stretch flex-wrap justify-content-between">
        <div>
        <h2 class="mt-2">${this.title}</h2>
        <h4 class="mt-5">${this.dateCreated}</h4>
        <h4 class="mt-5">${this.lastUpdated}</h4>
        
            </div>
        <div class="mb-1"><button class="btn btn-warning">delete Jot</button></div>
    </div>

    <div class="col-8 mt-2">
        <form action="">
        <textarea class="w-100 h-100" name="jotBody" id="jotBody" cols="50" rows="30"
        placeholder="Jot down a thought!"></textarea>
        </form>
    </div>

    </div>
    
    
    `
    }

    get ListOfJotsHTMLTemplate() {
        return /*html*/ `
        
        <div onclick="app.JotsController.setActiveJot('${this.id}')" role="button" class="d-flex">
        <h4 class="mt-3">${this.title}</h4>
         <p class="ms-2 mt-3 color-circle"> ${this.color}</p>
        </div>
        
        `
    }


}

