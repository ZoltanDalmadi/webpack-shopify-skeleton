import * as React from "react";
import * as ReactDOM from "react-dom";

const Blog = (props: any) => <h1>Blog from {props.compiler} and {props.framework}!</h1>;

ReactDOM.render(
  <Blog compiler="Babel" framework="React" />,
  document.getElementById("example")
);
