import React, { Suspense } from "react";
import Loader from "./suspense/loader";

//comment added 

//npm run build
import "./App.css";

const DataTable = React.lazy(() => import("./suspense/DataTable"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<Loader />}>
          <DataTable/>
        </Suspense>
     
    </div>
  );
}

export default App;

//suspense for data fetching is a new feature ,  so wait for data
// it could be image , script, any assettts. 
//https://codesandbox.io/s/fragrant-glade-8huj6