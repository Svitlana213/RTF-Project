import Views from "./Views.js";

export default class extends Views{
    constructor() {
        super()
        this.setTitle("Feed")
    }

    async getHtml() {
        return `
            <h1>All users posts here</h1>
        `
    }
}