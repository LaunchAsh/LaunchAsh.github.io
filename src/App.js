import React from "react";
import HomePage from "./views/HomePage";
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HomePage/>
    </React.Suspense>
  );
}

export default App;

