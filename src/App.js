import React from 'react'
import Editor from 'draft-js-plugins-editor'
import { EditorState } from 'draft-js'

import createSidebarToolbarPlugin from './plugins/sidebarToolbarPlugin'
import createEmbeddedDocumentPlugin from './plugins/embeddedDocumentPlugin'

// initialize custom plugins
const sidebarToolbarPlugin = createSidebarToolbarPlugin()
const embeddedDocumentPlugin = createEmbeddedDocumentPlugin()

// extract components from plugin if needed
const { SideToolbar } = sidebarToolbarPlugin

// declare all the plugins for editor
const plugins = [
  sidebarToolbarPlugin,
  embeddedDocumentPlugin,
]

const App = () => {
  const [editorState, updateEditorState] = React.useState(EditorState.createEmpty())

  return (
    <div className="App">
      <div className="EditorContainer">
        <Editor
          editorState={editorState}
          plugins={plugins}
          onChange={updateEditorState}
          placeholder="Tell your story..."
        />

        <SideToolbar />
      </div>
    </div>
  )
}

export default App
