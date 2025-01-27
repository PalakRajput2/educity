/* eslint-disable no-unused-vars */
import React ,{useState}from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {" "}
        <Title subTitle = "OUR PROGRAM" title="What we offer"/>
        <Program />
        <About setPlayState={setPlayState}/>
        <Title subTitle = "GALLERY" title="Campus Photos"/>
       <Campus/>
       <Title subTitle = "Testimonial" title="What students say"/>
    <Testimonial/>
    <Title subTitle = "Contact us " title="Get in touch"/>
    <Contact/>
    <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
