export const createReqObj = (method, body) => ({
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: body
})

export const registerUserFetch = (reqObj) => {
    fetch(`http://localhost:3000/users`, reqObj)
}

