import React, {useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'index.scss';
import MarkdownInput from "components/MarkdownInput";
import NoteDisplay from "components/NoteDisplay";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeParentTitle = (value) => {
    setTitle(
      value
    )
    console.log(typeof value)
  }

  const changeParentContent = (value) => {
    setContent(
      value
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-9">
          <NoteDisplay title={title} content={content}/>
          <MarkdownInput title={(value) => changeParentTitle(value)} content ={(value) => changeParentContent(value)}/>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));