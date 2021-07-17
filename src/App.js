import React from "react";
import NavBar from "./Navbar";
import Jumbotron from "./Jumbotron";
import FeatureSection from "./FeatureSection";
import CardSection from "./CardSection";
import Footer from "./Footer";


const App = () => {
    return(
        <div>
            <NavBar />
            <Jumbotron />
            <FeatureSection />
            <CardSection />
            <Footer />
        </div>
    )
}

export default App;