import axios from 'axios';
import getServerUrl from './helpers/urlResolver';
axios.defaults.baseURL = getServerUrl();
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.put['Content-Type'] = 'application/json; charset=utf-8';

export function postData(urlPath, data) {
    return axios.post(urlPath, data).then(function (response) {
        checkForIsamLogout(response.headers, urlPath);
        return response;
    })
}

export function postError(error) {
    return axios.post('/error', error);
}

export function putData(urlPath, data) {
    return axios.put(urlPath, data).then(function (response) {
        checkForIsamLogout(response.headers, urlPath);
        return response;
    }).catch();
}

export function getData(urlPath) {
    return axios.get(urlPath).then(function (response) {
        checkForIsamLogout(response.headers, urlPath);
        return response;
    });
}

export function searchData(urlPath, searchId) {
    return axios.get(urlPath + '?q=' + searchId).then(function (response) {
        checkForIsamLogout(response.headers, urlPath);
        return response;
    });
}

export function deleteData(urlPath){
    return axios.delete(urlPath).then(function (response) {
        checkForIsamLogout(response.headers, urlPath);
        return response;
    });
}

function checkForIsamLogout(responseHeaders, urlPath) {
    if (responseHeaders.server && responseHeaders.server.match(/webseal/i)) {
        console.log('======  getData - reloading due to ISAM expiration. urlPath:', urlPath);
        window.location.reload();
    }
}