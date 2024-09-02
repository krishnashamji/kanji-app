
// IMPORTS
import axios from 'axios';

// URL CONSTRUCTION
const baseURL = `https://kanjiapi.dev/v1/kanji`;

// FETCH ALL DATA
async function getKanjiData() {
    try {
        const response = await axios.get(`${baseURL}/all`);
        return response;  
    } catch (error) {
        console.error('Error fetching Kanji data:', error); 
        throw error;  
    }
}

// FETCH SPECIFIC DATA
async function getSpeficKanjiData(selectedKanji) {
    try {
        const response = await axios.get(`${baseURL}/${selectedKanji}`);
        return response;  
    } catch (error) {
        console.error('Error fetching specific Kanji data:', error); 
        throw error;  
    }
}

export { getKanjiData, getSpeficKanjiData }


