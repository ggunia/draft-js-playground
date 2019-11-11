import React from 'react'

const initialOffsetTop = 5

const Toolbar = ({ store }) => {
  const [topOffset, updateTopOffset] = React.useState(initialOffsetTop)
  const [optionsToggled, toggleOptions] = React.useState(false)

  const onEditorStateChange = (editorState) => {
    const selection = editorState.getSelection()
    const currentContent = editorState.getCurrentContent()
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey())

    setTimeout(() => {
      const encodedKey = `${currentBlock.get('key')}-0-0`
      const node = document.querySelector(`[data-offset-key="${encodedKey}"]`)

      // calculate editor offset top
      const { editor } = store.getItem('getEditorRef')()
      const editorContainerNode = editor.closest('.EditorContainer')

      // calculate nodes coords
      const editorContainerCoords = editorContainerNode.getBoundingClientRect()
      const coords = node.getBoundingClientRect()
      updateTopOffset(coords.top - editorContainerCoords.top - 5)
    }, 0)
  }

  React.useEffect(() => {
    store.subscribeToItem('editorState', onEditorStateChange)

    return () => {
      store.unsubscribeFromItem('editorState', onEditorStateChange)
    }
  }, [])

  return (
    <div className="ToolbarContainer" style={{ top: topOffset }}>
      <div
        className="ToolbarIcon"
        style={{ transform: !optionsToggled ? 'rotate(45deg)' : 'rotate(0deg)' }}
        onClick={() => toggleOptions(!optionsToggled)}
      >
        <span>&times;</span>
      </div>

      {optionsToggled && (
        <div className="ToolbarActions">
          <span className="ToolbarAction">1</span>
          <span className="ToolbarAction">2</span>
          <span className="ToolbarAction">3</span>
        </div>
      )}
    </div>
  )
}

export default Toolbar
