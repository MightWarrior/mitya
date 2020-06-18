const customFetch = (url, options) => fetch(`http://localhost:5000/api${url}`, options)
  .then(response => Promise.all([response.ok, response.json()]))
  .then(([responseOk, body]) => {
    if (responseOk) {
      return body;
    } else {
      throw new Error(body.message);
    }
  });

  export const login = (url, user) => customFetch(url,  { 
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
  },
}); 

export const profile = (url, idToken) => customFetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': idToken,
  }
})

export const max = (url, idToken) => customFetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': idToken,
  }
})

export const products = (url, idToken) => customFetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': idToken,
  }
})

export const buy =  (url, body, idToken) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': idToken,
  }
})

export const create = (url, body, idToken) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': idToken,
  }
})

export const update = (url, body, idToken) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': idToken,
  }
})
