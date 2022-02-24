/// <reference types="google.maps" />
import {Loader} from '@googlemaps/js-api-loader'

const GOOGLE_API_KEY = "AIzaSyCA8B3E6spgBh92hDzROew5WzUw-qYAs8Y"


export function googleService(){
  const loader = new Loader({
    apiKey: GOOGLE_API_KEY,
    version: "3.45.6"
  })

  loader.load().then(() =>{

    const geocoder = new google.maps.Geocoder()

    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: {lat: -20.6485183, lng: -41.9222056},
      zoom: 8
    })
  })
}
