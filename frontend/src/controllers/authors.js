import { customFetchGET, customFetchPOST } from '../helpers/fetch';

function searchAuthor(name) {
    const URL = '/authors/search';
    const params = {
        name,
    };
    return customFetchGET(URL, params);
}

function upsertAuthor(authorInfo) {
    const URL = '/authors/upsert';
    return customFetchPOST(URL, authorInfo, 'POST');
}

export {
    searchAuthor,
    upsertAuthor,
};
