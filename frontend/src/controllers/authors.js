import { customFetchGET, customFetchPOST } from '../helpers/fetch';

function searchAuthor(name) {
    const URL = '/authors/search';
    const params = {
        name,
    };
    return customFetchGET(URL, params);
}

function listBooksFromAuthor() {
    // TODO add param authorId
    // const URL = '/authors/listBooksFromAuthor';
    // const params = {
    //    authorId,
    // };
    // TODO create this URL in backend
    // return customFetchGET(URL, params);
    return Promise.resolve({
        data: [{
            title: 'Abra',
            date: '26/09/2020',
        }],
    });
}

function upsertAuthor(authorInfo) {
    const URL = '/authors/upsert';
    return customFetchPOST(URL, authorInfo, 'POST');
}

export {
    searchAuthor,
    listBooksFromAuthor,
    upsertAuthor,
};
