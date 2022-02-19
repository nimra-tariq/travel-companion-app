import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '6e72cdc788msh1c9f3ce440a111dp1d5f56jsn33d21c537927'
    }
};

export async function getPlacesData() {
    try {
        const { data: { data } } = await axios.get(url, options);
        return data;
    }
    catch (e) {
        console.log(e);
    }
}
axios.get(url)