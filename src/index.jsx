import React, {useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import MarkdownInput from "components/MarkdownInput";
import NoteDisplay from "components/NoteDisplay";

const App = () => {
  const [input, setInput] = useState({});

  const changeParentInput = (value) => {
    setInput({
      ...value
    })
  }

  return (
    <>
    <NoteDisplay title={input.title} content={input.content}/>
    <MarkdownInput data={(value) => changeParentInput(value)}/>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));