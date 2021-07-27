const myHeaders = new Headers();
const myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
};

function searchAuthor(name) {
    const URL = `http://localhost:3001/authors/search?name=${name}`;
    const promise = fetch(URL, myInit);
    return promise
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return Promise.reject('nope');
        });
}

export {
    searchAuthor,
};
