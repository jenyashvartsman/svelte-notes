import "beercss";
import "material-dynamic-colors";

import "./app.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
