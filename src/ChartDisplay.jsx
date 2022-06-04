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
            "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=rPbgf2JM150eQ9IeUmjpdHbVXhn2u4zSTDCtHGRa"
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
   }, [1]);

   useEffect(() => {
      displayData();
   });

   return (
      <>
         <Chart
            chartType={chartType}
            width={width}
            height={height}
            data={data}
            legendToggle
         />
      </>
   );
};

export default ChartDisplay;
