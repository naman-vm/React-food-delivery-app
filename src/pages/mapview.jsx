import React from "react";

import { mappls } from "mappls-web-maps";
import "../styles/mapview.css";

const Mapview = () => {
  const mapProps = {
    center: [19.07609, 72.877426],
    traffic: false,
    zoom: 10,
    geolocation: false,
    clickableIcons: false,
  };
  const styleMap = { width: "99%", height: "99vh", display: "inline-block" };
  var mapObject;
  var circleObject;
  var markerObject;
  var mapplsClassObject = new mappls();

  mapplsClassObject.initialize("f0ef6823e3ead5b3223d61a32c3fa453", () => {
    mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });
    circleObject = mapplsClassObject.Circle({
      center: { lat: "19.141275235121384", lng: "72.93128747976182" },
      map: mapObject,
      radius: 200,
      strokeColor: "red",
      fillColor: "red",
      fillOpacity: 0.3,
    });
    markerObject = mapplsClassObject.Marker({
      map: mapObject,
      position: { lat: 19.141275235121384, lng: 72.93128747976182 },
      popupHtml: "Hill Green Fine Dining",
      popupOptions: {
        // openPopup:  true,
        autoClose: true,
        maxWidth: 500,
      },
    });
    //       markerObject.setPosition({lat:28.454,lng:77.5454});
    // markerObject.setIcon("https://apis.mapmyindia.com/map_v3/1.png");
    //load map layers/components after map load, inside this callback (Recommended)
    mapObject.on("load", () => {
      // Activites after mapload
    });
  });

  //  var map = new mappls.marker({map : map, position : {"lat": 19.141275235121384,"long":72.93128747976182}})
  //   const key = 'f0ef6823e3ead5b3223d61a32c3fa453'
  //   const mapMyIndiaApi = (key) => {
  //     const value = fetch(`https://apis.mapmyindia.com/advancedmaps/v1/${key}/map_load`)
  //   }
  return (
    // <div className="container">
    //    <div className="map-container">
    //          hello Map here
    //     </div>
    // </div>
    //     <div>
    //     <Map
    //       mapboxAccessToken="MAPBOX_TOKEN"
    //       initialViewState={{
    //         longitude: -100,
    //         latitude: 40,
    //         zoom: 3.5,
    //       }}
    //       mapStyle="mapbox://styles/mapbox/streets-v11"
    //     >
    //       <GeolocateControl
    //         positionOptions={{ enableHighAccuracy: true }}
    //         trackUserLocation={true}
    //       />
    //     </Map>
    //   </div>
    <div className="map">
      <h2 className="map-h2">Search Food Hotspots Near You</h2>
      <div id="map" style={styleMap}></div>
      {/* <div className="google-map" style={{width: '70%',
    height: '425px',
    display: 'inline-block',
    marginLeft: '238px',
    borderRadius: '20px',
    position: 'relative',
    boxShadow: '10px 10px 8px #888888'}}>
        <MapmyIndia center={[19.076090,72.877426]} zoom={11} search={true} height={'425px'} 
        markers={[{position: [19.141275235121384, 72.93128747976182]}]}
        />
      
    </div> */}
    </div>
  );
};
export default Mapview;
