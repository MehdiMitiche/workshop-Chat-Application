import React from "react";
import Particles from "react-particles-js";

const ParticleComponent = () => (
  <div
    style={{
      zIndex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 150,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
          },
          size: {
            value: 1.5,
            random: true,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 6,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  </div>
);

export default ParticleComponent;
