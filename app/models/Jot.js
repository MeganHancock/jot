import { generateId } from "../utils/GenerateId.js"


export class Jot {

    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.dateCreated = data.dateCreated ? new Date(data.dateCreated) : new Date()
        this.lastUpdated = data.lastUpdated ? new Date(data.lastUpdated) : new Date()
        this.jotBody = data.jotBody || ''
        this.color = data.color

    }

    get ActiveJotHTMLTemplate() {
        return /*html*/`
    
    <div class="row p-5 bg-white rounded-3 justify-content-between shadow" style="border-style: solid; border-color: ${this.color};">

    <div class="col-4 d-flex flex-column align-items-stretch flex-wrap justify-content-between">
        <div>
        <h2 class="mt-2">${this.title}</h2>
        <h4 class="mt-5">Jot Created on ${this.DateCreatedDate} at ${this.DateCreatedTime}</h4>
        <h4 class="mt-5">Last Updated on ${this.LastUpdatedDate} at ${this.LastUpdatedTime}</h4>
        
            </div>
        <div class="mb-1"><button onclick="app.JotsController.removeJot('${this.id}')" class="">delete Jot</button></div>
    </div>

    <div class="col-8 mt-2">
        <form action="">
        <textarea onblur="app.JotsController.updateJot()" class="w-100 h-100" name="jotBody" id="jotBody" cols="50" rows="30"
        placeholder="Jot down a thought!">${this.jotBody}</textarea>
        </form>
    </div>

    </div>
    
    
    `
    }

    get ListOfJotsHTMLTemplate() {
        return /*html*/ `
        
        <div onclick="app.JotsController.setActiveJot('${this.id}')" role="button" class="d-flex" >
        <h4 class="mt-3" style="text-decoration: underline;
            text-decoration-color: ${this.color};">${this.title}</h4>
         <p class="ms-2 mt-3 color-circle" 
         style="background-color: ${this.color};"></p>
        </div>
        
        `
    }


    get DateCreatedDate() {
        return this.dateCreated.toLocaleDateString()
    }
    get DateCreatedTime() {
        return this.dateCreated.toLocaleTimeString()
    }


    get LastUpdatedTime() {
        return this.lastUpdated.toLocaleTimeString()
    }
    get LastUpdatedDate() {
        return this.lastUpdated.toLocaleDateString()
    }

}

