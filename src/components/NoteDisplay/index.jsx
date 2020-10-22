import React from 'react';
import Showdown from "showdown";
const converter = new Showdown.Converter();


const NoteDisplay = ({title, content}) => {
  
  const finalContent = converter.makeHtml(content)
  function createFinalContent(finalContent) {
    return {__html: `${finalContent}`};
  }

  return (
    <div className="NoteDisplayContainer">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={createFinalContent(finalContent)} />
    </div>
  )
}

export default NoteDisplay;