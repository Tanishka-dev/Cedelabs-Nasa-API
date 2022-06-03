import logo from "./logo.svg";
import "./App.css";

import ChartDisplay from "./ChartDisplay";

//https://api.nasa.gov/

function App() {
   const props = {
      chartType: "ScatterChart",

      width: "100%",
      height: "100%",
   };

   return (
      <div className="App">
         <header className="App-header">
            <div>
               <ChartDisplay {...props} />
            </div>
         </header>
      </div>
   );
}

export default App;
