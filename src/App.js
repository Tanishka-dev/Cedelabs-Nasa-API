import logo from "./logo.svg";
import "./App.css";

import ChartDisplay from "./ChartDisplay";

//https://api.nasa.gov/

function App() {
   const props = {
      chartType: "BarChart",
      width: "100vw",
      height: "100vh",
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
