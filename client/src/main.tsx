import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add additional styles for the eBook site
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, .font-heading {
    font-family: 'Poppins', sans-serif;
  }
  .clip-path-hero {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  .btn-gradient {
    background: linear-gradient(90deg, #eab308 0%, #fbbf24 100%);
  }
  .card-hover {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  .backdrop {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
