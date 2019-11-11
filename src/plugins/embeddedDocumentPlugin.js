import EmbeddedDocument from '../components/EmbeddedDocument'

export default () => {
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent()

        try {
          const entity = contentState.getEntity(block.getEntityAt(0))
          const type = entity.getType()

          if (type === 'embedded-document-plugin') {
            return {
              component: EmbeddedDocument,
              editable: false,
            }
          }
        } catch (error) {
          console.log(error)
        }
      }

      return null
    }
  }
}