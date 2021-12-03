import * as React from "react";
import OurService from "./OurServices";
import Hamburger from "./Hamburger";
import AppIntro from "./AppIntro";
import Services from "./Service";
import Contact from "./Contact"
import About from "./About"
import Footer from "../pages/Footer/Footer"

export default function SimpleContainer() {
  return (
    <div>
      <Hamburger />
      <br />
      <br />
      <br />
      <OurService />
      <br />
      <br />
      <br />
      <AppIntro />
      <br />
      <br />
      <br />
      <Services/>
      <br />
      <br />
      <br />
      <Contact/>
      <br />
      <br />
      <br />
      <About/>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
}
