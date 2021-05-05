export const createReqObj = (method, body) => {
    return(
    {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
    }
    )
}

export const registerUserFetch = (reqObj) => {
    // debugger
    fetch(`http://localhost:3000/users`, reqObj)
}

