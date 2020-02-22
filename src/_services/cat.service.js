import config from "config";

export const catService = {
    getAllCats,
    getBreeds,
    getCatById
}

var headers = {
    'x-api-key': config.apiKey,
    'Access-Control-Expose-Headers': 'Pagination-Count',
}

function getAllCats(pagination, id) {
    const requestOptions = {
        method: "GET",
        headers: headers
    };

    return fetch(`${config.apiUrl}images/search?page=${pagination.page}&limit=${pagination.perPage}&breed_id=${id}&order=asc`, requestOptions).then(handleResponse);
}

function getBreeds() {
    const requestOptions = {
        method: "GET",
        headers: headers
    };

    return fetch(`${config.apiUrl}breeds`, requestOptions).then(handleResponse);
}

function getCatById(id) {
    const requestOptions = {
        method: "GET",
        headers: headers
    };

    return fetch(`${config.apiUrl}images/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        return {data, count: response.headers.get('Pagination-Count')}
    })
}