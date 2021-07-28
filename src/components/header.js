/* import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import "./App.scss";
import obrazek from "./assets/img.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Content() {
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.from("#thirdCircle", {
      scale: 0.35,
      duration: 5,
      scrollTrigger: {
        trigger: ".orangeWrapper",
        scrub: 2,
        pin: true,
        start: "50% 50%",
        end: "+=125%",
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="bg-gray-50 h-screen relative flex justify-center items-center">
        <p>scroll down</p>
      </div>
      <div className=" bg-gray-50  orangeWrapper  flex justify-center items-center">
        <div className="orange" ref={circleRef} id="thirdCircle">
          <img src={obrazek} alt="xx" className="image" />
        </div>
      </div>
      <div className="bg-gray-50 h-screen relative flex justify-center items-center">
        <p>scroll up</p>
      </div>
    </>
  );
}
 */
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Header() {
  return (
    <nav className="h-24 bg-gray-50 flex flex-col justify-center items-start pl-4">
      <ul>
        <li>
          <Link to={ROUTES.SHOWCASE}>Showcase</Link>
        </li>
        <li>
          <Link to={ROUTES.WORK}>About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
