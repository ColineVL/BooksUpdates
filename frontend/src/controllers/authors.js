import { customFetch } from '../helpers/fetch';

function searchAuthor(name) {
    const URL = '/authors/search';
    const params = {
        name,
    };
    return customFetch(URL, params);
}

export {
    searchAuthor,
};
