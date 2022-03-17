import axios from 'axios';

async function getData() { //will need to adjust the JSON for the needed info maybe
    let response = await axios.get(`https://sheltered-refuge-85246.herokuapp.com/api/json`);
    return response.data;
}
