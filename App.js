/*global kakao*/
import React, { Component, KakaoMap } from "react";
import styled from "styled-components";

class MapContent extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=07489920b7a2167f937a0011ff16dd53&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.60226275383353, 126.95533647295382),
          level: 7
        };

        const map = new window.kakao.maps.Map(container, options);
     
      });
    };
  }

  render() {
    return <MapContents id="Mymap"></MapContents>;
  }
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapContent;
