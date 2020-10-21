import React from "react";
import ReactDOM from "react-dom";
import MarkdownInput from "components/MarkdownInput";
import NoteDisplay from "components/NoteDisplay";

const App = () => {
  return (
    <>
    <MarkdownInput/>
    <NoteDisplay/>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));