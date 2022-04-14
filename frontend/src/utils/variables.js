
export function getVariables(text_route) {
    const routes = {
        API_URL:"http://localhost:9000/",
        PHOTO_URL:"http://localhost:9000/employee/savefile",
    }
    return routes[text_route]
  }