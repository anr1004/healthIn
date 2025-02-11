// src/KakaoMap.js
import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import icon_gym from '../assets/gymicon.png';

const KakaoMap = () => {
  const mapPosition = {lat: 35.1595, lng: 129.0597}; //맵 위치 설정
  const markerPosition = {lat: 35.1595, lng: 129.0597}; //마커 위치 설정

  return (
    <Map 
      center={mapPosition}
      style={{width: '100%', height: '300px'}}
      level={4}
    >
      <MapMarker
        position={markerPosition}
        image={{
          src: icon_gym,
          size: { width: 50, height: 50},
        }}
      >
      </MapMarker>
    </Map>
  )
};

export default KakaoMap;
