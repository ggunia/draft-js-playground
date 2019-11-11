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
      style={{ fontSize: 20, color: 'black', width: '100%', outline: 'none', border: 'none' }}
      autoFocus
      onBlur={() => toggleEditor(true)}
    />
  )
}


export default EmbeddedDocument
