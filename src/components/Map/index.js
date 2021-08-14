import React, { useEffect, useState } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { useDispatch } from 'react-redux';

import { setRestaurants } from '../../redux/modulos/restautants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const { google, query } = props;
  let searchByQuery;

  useEffect(() => {
    if (query) searchByQuery(query);
  }, [query, searchByQuery]);

  searchByQuery = (query) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      query,
    };
    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  };

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
