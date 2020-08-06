# DomClick

## Flats
``` javascript
createFlats({
  // params
})
/*
 url => /flats/id
 method => post
 status => 200
 responce => {...}
*/

getFlats({
  id: "string",
  // other params
})
/*
 url => /flats/id
 method => get
 status => 200
 responce => {...}
*/

getFlats({
  // params
})
/*
 url => /flats
 method => get
 status => 200
 responce => [{...}, ...]
*/

updateFlats({
  id: "string",
  // other params
})
/*
 url => /flats/id
 method => put
 status => 200
 responce => {...}
*/

deleteFlats({
  id: "string",
  // other params
})
/*
 url => /flats/id
 method => delete
 status => 200
 responce => {...}
*/
```


## Users
``` javascript
createUser({
  // params
})
/*
 url => /users
 method => post
 status => 200
 responce => {...}
*/

getUsers({
  id: "string",
  // other params
})
/*
 url => /users/id
 method => get
 status => 200
 responce => {...}
*/

getUsers({
  // params
})
/*
 url => /users
 method => get
 status => 200
 responce => [{...}, ...]
*/

updateUsers({
  id: "string",
  // params
})
/*
 url => /users/id
 method => put
 status => 200
 responce => {...}
*/

deleteUsers({
  id: "string",
  // params
})
/*
 url => /users/id
 method => delete
 status => 200
 responce => {...}
*/
```


## Auth
``` javascript
signinAuth({
  login: "string",
  password: "string",
  rememberMe: "boolean"
})
/*
 url => /auth/signin
 method => post
 status => 200
 responce => {...}
*/

registerAuth({
  login: "string",
  password: "string"
})
/*
 url => /auth/register
 method => post
 status => 200
 responce => {...}
*/

logoutAuth()
/*
 url => /auth/logout
 method => post
 status => 200
 responce => {...}
*/
```