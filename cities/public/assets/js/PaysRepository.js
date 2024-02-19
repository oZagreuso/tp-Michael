import { Pays } from "./Pays.js";

class PaysRepository
{
    
    static apiBaseUrl = 'http://localhost:3000/api';

    async fetchDataFromApi()
    {
        try 
        {
            const response = await fetch(PaysRepository.apiBaseUrl + '/pays');
            const data = await response.json();
            return data;
        }
        catch (error)
        {
            console.error('Erreur récupération données depuis l\'API')
            throw error;
        }
    }
    
}

export {PaysRepository, Pays}