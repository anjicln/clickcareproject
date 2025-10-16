import Index from "./components/index.jsx"
import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} /> 
      ): (
        <div className="animate-fadeIn">
          <Index/>
        </div>
       )}
    </>
  );
}

export default App;
