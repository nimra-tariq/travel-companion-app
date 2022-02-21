import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// export async function getPlacesData(sw, ne) {

//     try {

//         const { data: { data } } = await axios.get(url, {
//             params: {
//                 bl_latitude: sw.lat,
//                 tr_latitude: ne.lat,
//                 bl_longitude: sw.lng,
//                 tr_longitude: ne.lng,
//             },
//             headers: {
//                 'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//                 'x-rapidapi-key': 'f9d6434f11msh99526a50172080fp108701jsnc333b6b6328f'
//             }
//         });

//         return data;
//     }
//     catch (e) {
//         console.log(e);
//     }
// }


export async function getPlacesData() {

        try {
    
            const { data: { data } } = await axios.get(url, {
                params: {
                    bl_latitude: '31.39925934417171',
                    tr_latitude: '31.44320590774619',
                    bl_longitude: '73.07284770139162',
                    tr_longitude: '73.12486109860842',
                },
                headers: {
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'x-rapidapi-key': 'f9d6434f11msh99526a50172080fp108701jsnc333b6b6328f'
                }
            });
    
            return data;
        }
        catch (e) {
            console.log(e);
        }
    }