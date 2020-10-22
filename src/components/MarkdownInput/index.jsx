import React, {useState} from 'react';

const MarkdownInput = ({title, content}) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  const handleTitleChange = (e) => {
    setCurrentTitle(e.currentTarget.value)
    title(e.currentTarget.value)
  }

  const handleContentChange = (e) => {
    setCurrentContent(e.currentTarget.value)
    content(e.currentTarget.value)
  }

  const save = (noteTitle, wholeNote) => {
    localStorage.setItem(noteTitle, JSON.stringify(wholeNote))
  }

  return (
    <form>
      <div>
        <label>Titre</label>
        <input type="text" name="title" onChange={handleTitleChange} />
      </div>
      <div>
        <label>Content</label>
        <textarea type="textarea" name="content" onChange={handleContentChange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => save(currentTitle, currentContent)}>Sauvegarder</button>
    </form>
  )
}

export default MarkdownInput

