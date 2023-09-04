import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";

import Header from "../src/components/Header";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";

function App() {
  const [currentTab, handleTabChange] = useState("About");

  const tabComponents = {
    About: <About />,
    Contact: <Contact />,
    Portfolio: <Portfolio />,
    Resume: <Resume />,
  };

  const renderTab = () => {
    return tabComponents[currentTab] || tabComponents["About"];
  };

  return (
    <>
      <Helmet>
        <title>Constantin's Portfolio | {currentTab} </title>
      </Helmet>
      <Header currentTab={currentTab} handleTabChange={handleTabChange} />
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;
