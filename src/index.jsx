import React, {useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'index.scss';
import MarkdownInput from "components/MarkdownInput";
import NoteDisplay from "components/NoteDisplay";
import NoteCard from "components/NoteCard"

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes] = useState(localStorage)
  const [currentKey, setCurrentKey] = useState("");

  const changeParentTitle = (value) => {
      setTitle(value)
  }

  const changeParentContent = (value) => {
      setContent(value)
  }

  const refreshNote = (title, content) => {
    setTitle(title)
    setContent(content)
  }

  const displayNotes = (notes, note) => {
    let parsedNote = JSON.parse(notes.getItem(note))
    return (
      <NoteCard
        key={note}
        id={note}
        title={parsedNote.title}
        content={parsedNote.content}
        theClick={(title, content) => refreshNote(title, content)}
        getCurrentNoteKey={(key) => currentNoteKey(key)}
      />
    )
  }

  const currentNoteKey = (key) => {
    console.log(key)
    setCurrentKey(key)
  }


  const newNote = () => {
    setTitle("")
    setContent("")
    setCurrentKey("")
  }

  return (
    <div className="container m-5 mb-0">
      <div className="row mb-0">
        <div className="col-md-3">
          <div className="list-group" style={{height:"85vh"}}>
            <button className="bg-success list-group-item list-group-item-action flex-column align-items-start text-white text-center font-weight-bold" onClick={newNote} style={{outline:"none"}}>Nouvelle note</button>
            <div className="overflow-auto">
              {Object.keys(notes).map(note => displayNotes(notes, note)).sort()}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <NoteDisplay title={title} content={content}/>
          <MarkdownInput
            title = {title}
            content = {content}
            titleFn = {(value) => changeParentTitle(value)}
            contentFn = {(value) => changeParentContent(value)}
            updatedLocalStorage={(title, content) => refreshNote(title, content)}
            currentKey = {currentKey}
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));

