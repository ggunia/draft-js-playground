import React from 'react'
import Editor from 'draft-js-plugins-editor'
import { EditorState } from 'draft-js'

import createSidebarToolbarPlugin from './plugins/sidebarToolbarPlugin'

const sidebarToolbarPlugin = createSidebarToolbarPlugin()

const { SideToolbar } = sidebarToolbarPlugin
const plugins = [
  sidebarToolbarPlugin,
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
