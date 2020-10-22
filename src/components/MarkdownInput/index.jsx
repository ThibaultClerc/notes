import React, {useState} from 'react';

const MarkdownInput = ({data}) => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => {
    setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
    })
    
    data(input)
  }

  return (
    <form>
      <div>
        <label>Titre</label>
        <input type="text" name="title" onChange={handleInputChange} />
      </div>
      <div>
        <label>Content</label>
        <input type="text" name="content" onChange={handleInputChange} />
      </div>
      <input type="submit" />
    </form>
  )
}

export default MarkdownInput

