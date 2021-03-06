import axios from 'axios';
import { parseXml, xmlToJson } from './parseXML';

export const get = function (query) {
    return new Promise(function (resolve, reject) {
        axios('api/search?q=' + query, {
            method: 'GET',
        }).then(res => {
            const dom = parseXml(res.data);
            var json = xmlToJson(dom);
            resolve(JSON.parse(json.replace("undefined", "")));
        })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}

export const getDetails = function (query) {
    return new Promise(function (resolve, reject) {
        axios('api/getDetails?q=' + query, {
            method: 'GET',
        }).then(res => {
            const dom = parseXml(res.data);
            var json = xmlToJson(dom);
            resolve(JSON.parse(json.replace("undefined", "")));
        })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}


export const getAuthorDetails = function (query) {
    return new Promise(function (resolve, reject) {
        axios('api/getAuthorDetails?q=' + query, {
            method: 'GET',
        }).then(res => {
            const dom = parseXml(res.data);
            var json = xmlToJson(dom);
            resolve(JSON.parse(json.replace("undefined", "")));
        })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    })
}

//Ender\'s+Game