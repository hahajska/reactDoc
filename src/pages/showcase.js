import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import obrazek from "../assets/img.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
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
    <section>
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
    </section>
  );
}
