import App from "./App";
import { createRoot } from 'react-dom/client';

/**
 * Import the stylesheet for the plugin.
 */
// Render the App component into the DOM
const domNode = document.getElementById('{{projectName}}-wrapper');
const root = createRoot(domNode);
root.render(<App />);
