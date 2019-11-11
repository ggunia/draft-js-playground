import React from 'react'
import createStore from './createStore'
import Toolbar from './Toolbar'

export default () => {
  const store = createStore({ open: true })

  const SideToolbar = props => <Toolbar {...props} store={store} />

  return {
    initialize: ({ setEditorState, getEditorState, getEditorRef }) => {
      store.updateItem('setEditorState', setEditorState)
      store.updateItem('getEditorState', getEditorState)
      store.updateItem('getEditorRef', getEditorRef)
    },

    onChange: (editorState) => {
      store.updateItem('editorState', editorState)
      return editorState
    },

    SideToolbar
  }
}
