import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const data = [
   ["Name", "Esti. Diameter Max", "Esti. Diameter Min"],
   ["21277", 8175000, 8008000],
];
const ChartDisplay = ({ chartType, width, height }) => {
   const [estimatedData, setEstimatedData] = useState([]);
   const fetchData = () => {
      return axios
         .get(
            "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=fOvJU5VlU4h1KQVYrvrRYIRohpITziDZa4oFkM0m"
         )
         .then(({ data }) => {
            // handle success
            console.log(data);
            return data;
         })
         .catch((err) => {
            // handle error
            console.eror(err);
         });
   };

   useEffect(() => {
      fetchData().then((data) => {
         setEstimatedData(data.near_earth_objects);
      });
   });
   return (
      <Chart
         chartType="BarChart"
         width={width}
         height={height}
         data={() => estimatedData.map((data) => {})}
         legendToggle
      />
   );
};

export default ChartDisplay;
