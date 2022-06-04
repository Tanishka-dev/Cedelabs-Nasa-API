import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const data = [["Name", "Esti. Diameter Max", "Esti. Diameter Min"]];
const ChartDisplay = ({ chartType, width, height }) => {
   const [estimatedData, setEstimatedData] = useState([]);
   const fetchData = () => {
      return axios
         .get(
            "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ZK2rXjOaJmcF8GYGQdgF0Xe4Jt5IwlGza8iyB1V0"
         )
         .then(({ data }) => {
            // handle success

            return data;
         })
         .catch((err) => {
            // handle error
            console.eror(err);
         });
   };

   const displayData = () => {
      estimatedData.map((val) => {
         const ans = [];
         ans.push(
            val.name,
            val.estimated_diameter.meters.estimated_diameter_max,
            val.estimated_diameter.meters.estimated_diameter_min
         );
         data.push(ans);
      });

      return data;
   };
   useEffect(() => {
      fetchData().then((data) => {
         setEstimatedData(data.near_earth_objects);
      });
      displayData();
   });
   return (
      <Chart
         chartType={chartType}
         width={width}
         height={height}
         data={data}
         legendToggle
      />
   );
};

export default ChartDisplay;
