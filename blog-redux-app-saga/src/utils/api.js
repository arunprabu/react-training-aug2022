// a fn to make ajax call using native fetch api 
export async function callApi(method, url, data) {
  const res = await fetch( url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json();
}
