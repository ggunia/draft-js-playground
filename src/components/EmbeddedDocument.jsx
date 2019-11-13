import React from 'react'

const EmbeddedDocument = ({ blockProps: { setReadOnly } }) => {
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    setReadOnly(true)
    inputRef.current.focus()
  }, [setReadOnly])

  return (
    <input
      ref={inputRef}
      className="EmbedInput"
      autoFocus
      placeholder="Paste a link to embed content from another site and press enter"
      onBlur={() => setReadOnly(false)}
    />
  )
}

export default EmbeddedDocument
