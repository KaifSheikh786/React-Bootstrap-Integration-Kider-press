
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Classes from "./Component/Classes";
import Contact from "./Component/Contact";
import Facilities from "./Component/Facilities";
import Team from "./Component/Team";
import CallToAction from "./Component/CallToAction";
import Appointment from "./Component/Appointment";
import Testimonial from "./Component/Testimonial";
import Error from "./Component/Error";
import Footer from "./Footer";
import Body from "./Body";

function App() {
  return (<>
    <Header/>
    <Body/>

    <Footer/>
    </>
  );
}

export default App;
