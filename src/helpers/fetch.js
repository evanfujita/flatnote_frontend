export const createReqObj = (method, body) => {
    return(
    {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
    }
    )
}

export const postFetch = (resource, reqObj, history) => {
    fetch(`http://localhost:3000/${resource}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

