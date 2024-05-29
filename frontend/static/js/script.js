import Feed from "./views/Feed.js"
import Profile from "./views/Profile.js"
import Chat from "./views/Chat.js"

const navigation = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [
        { path: "/", view: Feed },
        { path: "/profile", view: Profile },
        { path: "/chat", view: Chat },
    ]

    const routeMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = routeMatches.find(routeMatch => routeMatch.isMatch)

    console.log(match)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        }
    }

    const view = new match.route.view()

    document.querySelector("#app").innerHTML = await view.getHtml()
}

window.addEventListener('popstate', router)

// no reload
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            navigation(e.target.href)
        }
    })
    router()
})