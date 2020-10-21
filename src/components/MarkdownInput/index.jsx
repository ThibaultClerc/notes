import React, {useState} from 'react';

const MarkdownInput = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return (
    <form>
      <div>
        <label>Titre</label>
        <input type="text" name="title" onChange={handleInputChange} />
      </div>
      <div>
        <label>Note</label>
        <input type="text" name="content" onChange={handleInputChange} />
      </div>
      <input type="submit" />
    </form>
  )
}

export default MarkdownInput

