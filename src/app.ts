import axios from "axios";

//? Variables
const form = document.querySelector('form')!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const GEOCODING_API_KEY = process.env.API_KEY;
type GeocodingResponse = {
    results: {bbox: { lat1: number, lon1: number, lat2: number, lon2: number } }[];
}
declare var mapboxgl: any; // Because it's a CDN so didn't show on, on this page

//? Functions
function searchAdressHandler(event: Event) {
    event.preventDefault(); //* stop the form to process
    // Access address value from the form
    const enteredAddress = addressInput.value;
    const locationUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURI(enteredAddress)}&format=json&apiKey=${GEOCODING_API_KEY}`;
    // send this to google's API!/geocoding api
    axios.get<GeocodingResponse>(locationUrl).then(response => {
        if (!response.data.results[0]) {
            throw new Error("Didn't find the address ! Write a correct one !")
        }
        const coordinates = response.data.results[0].bbox;
            let lng = (coordinates.lon1 + coordinates.lon2)/2;
            let lat = (coordinates.lat1 + coordinates.lat2)/2;        
        console.log(coordinates);
        //? MAP
        mapboxgl.accessToken = process.env.MAP_KEY;
        const map = new mapboxgl.Map({
            container: document.getElementById("map"),
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: 10,
            projection: 'globe' 
        });
        map.on('style.load', () => {
            map.setFog({}); 
        });
        //? marker
        new mapboxgl.Marker({
            color: "#198EAE",
            draggable: true
        }).setLngLat([lng, lat])
        .addTo(map);
    })
    .catch(err => {
        alert(err.message)
        console.log(err)
    })
}

//? Code
form.addEventListener("submit", searchAdressHandler);