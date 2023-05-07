import React, { useEffect } from "react";

function Earthmore() {
  useEffect(() => {
    fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-05-01&endtime=2023-05-01&minmagnitude=4&latitude=8.4&longitude=77.5&maxradiuskm=2000")
    .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Fetching earthquake data...</div>;
}

export default Earthmore;