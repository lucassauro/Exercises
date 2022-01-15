import fetch from 'node-fetch';

const response = await fetch('http://localhost:3000/recipes/', {
  method: 'POST',
  headers: {
    Accept: 'application/json', // what is the type of data that is expected 
    'Content-Type': 'application/json', // means that body is sending a json
  },
  body: JSON.stringify({ 
    id: 5, 
    name: 'Macarrão com Frangosssssssss',
    price: 40,
    waitTime: 50
  })
  //only text is allowed through body, that's why is used stringify. And that's the reason to use bodyParser on back-end.
});
const json = await response.json();
console.log(response);
console.log(json);

// the same request on httpie would look like this:
// http METHOD :PORT/path id:=4 name=='string' price:=30
// http POST :3000/recipes id:=4 name=='Macarrão com frango' price:=30

// the same request on browser would look like this:
// http://localhost:3000/recipes/search?id=4&name=Macarrão+com+frango&maxPrice=40
// browser just allow method GET.

// operator ':=' sends data as number, boolean, object or arrays;
// operator '==' sends data as string on URL parameters.
// more on: https://httpie.io/docs/cli/request-items


const authorization = await fetch('http://localhost:3000/validateToken', {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // authorization: "abc", // invalid token.
    authorization: "abcdefghijklmnop" // 16characters, valid token.
  }
})
const json = await authorization.json()
console.log(authorization);
console.log(json);

// the same request on httpie would look like this
// http METHOD :PORT/path Authorization:16charactertoken
// http POST :3000/validateToken Authorization:abcdefghijklmnop
// operator ':' for key:value pairs on HTTP Headers;

// PUT method request
const responsePut = await fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});
const jsonPut = await responsePut.json()
console.log(responsePut);
console.log(jsonPut);

// DELETE method request
const responseDelete = await fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});
const jsonDelete = await responseDelete.json()
console.log(responseDelete);
console.log(jsonDelete);