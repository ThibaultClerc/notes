import React from 'react';


const NoteCard = ({id, title, content, theClick, getCurrentNoteKey}) => {

  const clickHandler = () => {
    theClick(title, content)
    getCurrentNoteKey(id)
  }

  return (
      <button href="#" className="list-group-item list-group-item-action flex-column align-items-start" onClick={clickHandler} style={{outline:"none"}}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{title}</h5>
        </div>
        <p className="mb-1 text-truncate">{content}</p>
      </button>
  )
}

export default NoteCard
