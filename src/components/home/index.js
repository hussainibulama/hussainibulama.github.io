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
              I’m a software engineer with startup experience. I run a startup
              for a year or so before quiting to join others and learn from
              them. I always build and love building amazing product that solves
              complex problems using agile methodology. For now, I work mostly
              as a <span>Full Stack Engineer </span>
              and/or <span>DevOps Engineer(AWS)/System Architect.</span>
            </p>
          </div>
          <div>
            <a className="but" href="linked.com">
              Check me out on linkedIn
            </a>
          </div>
        </div>
        <div className="level2">
          <div className="header">
            <h1>About Me</h1>
          </div>
          <div className="others">
            <div className="comment">
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS! Fast-forward to today, and I’ve had the
                privilege of working at an advertising agency, a start-up, a
                huge corporation, and a student-led design studio. My main focus
                these days is building accessible, inclusive products and
                digital experiences at Upstatement for a variety of clients. I
                also recently launched a course that covers everything you need
                to build a web app with the Spotify API using Node & React. Here
                are a few technologies I’ve been working with recently:
              </p>
            </div>
            <div className="picture_side"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
