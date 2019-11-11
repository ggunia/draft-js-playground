import React from 'react'

import { EditorContext } from '../contextes'

const EmbeddedDocument = () => {
  const inputRef = React.useRef(null)
  const { toggleEditor } = React.useContext(EditorContext)

  React.useEffect(() => {
    toggleEditor(false)
    inputRef.current.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      className="EmbedInput"
      autoFocus
      placeholder="Paste a link to embed content from another site and press enter"
      onBlur={() => toggleEditor(true)}
    />
  )
}

export default EmbeddedDocument
