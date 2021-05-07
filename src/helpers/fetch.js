export const createReqObj = (method, body) => {
    return(
    {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
    }
    )
}

export const loginFetch = (reqObj, reducer) => {
    fetch('http://localhost:3000/login', reqObj)
    .then(resp => resp.json())
    .then(user => {

        console.log(user)
        
    })
}

export const postFetch = (resource, reqObj) => {
    fetch(`http://localhost:3000/${resource}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

export const getFetch = resource => {
    fetch(`http://localhost:3000/${resource}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

