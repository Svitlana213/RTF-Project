import Views from "./Views.js";

export default class extends Views {
    constructor() {
        super()
        this.setTitle("Chat")
    }

    async getHtml() {
        return `
            <h1>Show all users and mark who are online and offline. Click on user and open private masseges</h1>
        `
    }
}