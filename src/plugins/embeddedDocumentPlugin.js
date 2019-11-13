import EmbeddedDocument from '../components/EmbeddedDocument'

export default () => {
  return {
    blockRendererFn: (block, { getEditorState, setReadOnly, setEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent()

        try {
          const entity = contentState.getEntity(block.getEntityAt(0))
          const type = entity.getType()

          if (type === 'embedded-document-plugin') {
            return {
              component: EmbeddedDocument,
              editable: false,
              props: {
                setReadOnly,
                setEditorState,
              }
            }
          }
        } catch (error) {
          console.log('handle cases when somehow atomic block has not matching EntityMap')
          console.log(error)
        }
      }

      return null
    }
  }
}
