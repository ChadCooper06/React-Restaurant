import axios from 'axios';

export async function getData(URL) { //will need to adjust the JSON for the needed info maybe
    let response = await axios.get(`${URL}`);
    return response.data;
}
