import React from 'react';

const NoteDisplay = ({title, content}) => {

  return (
    <div className="NoteDisplayContainer">
      <p>Title: {title}</p>
      <p>Content: {content}</p>
    </div>
  )
}

export default NoteDisplay;