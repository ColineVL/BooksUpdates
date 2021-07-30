const myHeaders = new Headers();

const mainURL = 'http://localhost:3001';

function customFetchGET(URL, params) {
    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
    };
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

function customFetchPOST(URL, params) {
    const myInit = {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };
    const totalURL = mainURL + URL;
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
    customFetchGET,
    customFetchPOST,
};
