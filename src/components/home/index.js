import React from "react";
import Navbar from "../nav";
import "./home.scss";
import Bg from "../assets/images/bg.png";
import Myself from "../assets/images/hu1.jpeg";

function Home() {
  return (
    <div className="app-v1">
      <Navbar />
      <div className="wrapper">
        <div className="level1">
          <div className="leftside">
            <div>
              <h1>Hi, my name is</h1>
            </div>
            <div>
              <h2>Hussaini Bulama.</h2>
            </div>
            <div>
              <h2 className="lighter">
                I build things for the web and mobile.
              </h2>
            </div>
            <div className="intro">
              <p>
                I’m a software engineer with startup experience. I run a startup
                for a year or so before quiting to join others and learn from
                them. I always build and love building amazing product that
                solves complex problems using agile methodology. For now, I work
                mostly as a <span>Full Stack Engineer </span>
                and/or <span>DevOps Engineer(AWS)/System Architect.</span>
              </p>
            </div>
            <div>
              <a
                className="but"
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/hussainibulama"
              >
                Check me out on linkedIn
              </a>
            </div>
          </div>
          <div className="rightside">
            <div className="images">
              <div className="img1">
                <img src={Bg} alt="Bg for myself" />
              </div>
              <div className="img2">
                <img src={Myself} alt="Myseff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
