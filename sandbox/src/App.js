import React from "react";
import "./styles.css";
console.log("[parent] mobx: ", require("mobx") !== undefined);
console.log("[parent] mobx-react: ", require("mobx-react") !== undefined);

import "@rluvaton-debugging/child1";
import "@rluvaton-debugging/child2";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
