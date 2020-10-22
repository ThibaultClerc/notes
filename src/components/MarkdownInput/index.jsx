import React, {useState} from 'react';

const MarkdownInput = ({title, content, titleFn, contentFn, updatedLocalStorage, currentKey}) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  const handleTitleChange = (e) => {
    setCurrentTitle(e.currentTarget.value)
    titleFn(e.currentTarget.value)
  }

  const handleContentChange = (e) => {
    setCurrentContent(e.currentTarget.value)
    contentFn(e.currentTarget.value)
  }

  const save = (e, injectedTitle, injectedContent, currentKey) => {
    if ((currentKey !== "") && (currentKey in localStorage)) {
      let currentNoteObject = {}
      
      if (injectedTitle !== "") {
        currentNoteObject.title = injectedTitle
      } else if (injectedTitle === "") {
        currentNoteObject.title = title
      }

      if (injectedContent !== "") {
        currentNoteObject.content = injectedContent
      } else if (injectedContent === ""){
        currentNoteObject.content = content
      }

      localStorage.setItem(`${currentKey}`, JSON.stringify(currentNoteObject))
      updatedLocalStorage(currentNoteObject.title, currentNoteObject.content)

    } else {
      let currentNoteObject = {}
      currentNoteObject.title = title
      currentNoteObject.content = content
      localStorage.setItem(`${localStorage.length}`, JSON.stringify(currentNoteObject))
      updatedLocalStorage(title, content)
    }
  }

  console.log(localStorage)
  return (
    <form>
      <div className="form-group">
        <input className="form-control" type="text" name="title" value={title} placeholder="Titre" onChange={handleTitleChange} />
      </div>
      <div className="form-group">
        <textarea className="form-control" type="textarea" name="content" value={content} placeholder="Note" onChange={handleContentChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={(e) => save(e, currentTitle, currentContent, currentKey)}>Sauvegarder</button>
    </form>
  )
}

export default MarkdownInput

