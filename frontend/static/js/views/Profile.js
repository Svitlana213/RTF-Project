import Views from "./Views.js";

export default class extends Views {
    constructor() {
        super()
        this.setTitle("Profile")
    }

    async getHtml() {
        return `
            <h1>Logged in user profile</h1>
        `
    }
}