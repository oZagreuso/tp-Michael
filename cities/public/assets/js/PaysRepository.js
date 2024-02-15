import { Pays } from "./pays.js";

class PaysRepository
{
    /** @var {String} apiBaseUrl */
    static apiBaseUrl = 'http://localhost:3000/api';

    /** 
     * @param {String} chemin  
     * @param {Object} options
     * @returns {Array|Object}
    */

    static async fetchUrl(chemin, options = {})
    {
        let url = PaysRepository.apiBaseUrl + chemin;
        let response = await fetch(url, options);
        let jason = await response.json();
        console.log(url, json);
        return json;
    }

    /**
     * 
     * @param {Number} identifiant
     * @returns {Object}
     */
    static async getPays(identifiant)
    {
        let chemin = '/pays/' + identifiant;
        let json = await PaysRepository.fetchUrl(chemin);
        let p = new Pays(json);
        return p;
    }
}

export {PaysRepository, Pays}