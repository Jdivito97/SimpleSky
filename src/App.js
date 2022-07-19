import React from "react";
import Footer from "./components/footer";

import Weather from "./components/weather";
import Header from "./components/header";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
