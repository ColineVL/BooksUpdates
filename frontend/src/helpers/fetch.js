const myHeaders = new Headers();
const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
};
const mainURL = 'http://localhost:3001';

function customFetch(URL, params) {
    let totalURL = mainURL + URL;
    const properties = Object.keys(params);
    if (properties.length > 0) {
        totalURL += '?';
        properties.forEach((property) => {
            totalURL += `${property}=${params[property]}`;
        });
    }
    const promise = fetch(totalURL, myInit);
    return promise
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            // TODO if it doesn't work ?
            return Promise.reject('nope');
        });
}

export {
    customFetch,
};
