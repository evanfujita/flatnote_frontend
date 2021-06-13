export const createReqObj = (method, body) => {
    return(
      {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
      }
    )
}

export const loginFetch = (reqObj, loginAuth, loginFail) => {
    fetch('http://localhost:3000/login', reqObj)
    .then(resp => resp.json())
    .then(user => {
        if (user.id){loginAuth(user)}
        if (user.error){loginFail()}
    })
}

export const postFetch = (resource, reqObj, reducer) => {
    fetch(`http://localhost:3000/${resource}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
        if(reducer){
            reducer(data)
        }
    })
}

export const getFetch = resource => {
    fetch(`http://localhost:3000/${resource}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

export const deleteFetch = (resource) => {
    fetch(`http://localhost:3000/${resource}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
        
    })
}
