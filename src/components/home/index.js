import React from "react";
import Navbar from "../nav";
import "./home.scss";

function Home() {
  return (
    <div className="app-v1">
      <Navbar />
      <div className="wrapper">
        <div className="level1">
          <div>
            <h1>Hi, my name is</h1>
          </div>
          <div>
            <h2>Hussaini Bulama.</h2>
          </div>
          <div>
            <h2 className="lighter">I build things for the web and mobile.</h2>
          </div>
          <div className="intro">
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at{" "}
              <span>Upstatement</span>.
            </p>
          </div>
          <div>
            <a className="but" href="linked.com">
              Check me out on linkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
