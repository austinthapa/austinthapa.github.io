particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 700 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.8,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
  },
  retina_detect: true,
});
