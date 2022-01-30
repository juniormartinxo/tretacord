import ViewerStyled from './ViewerStyled'

function Viewer({ mkdText, editable }) {
  return (
    <ViewerStyled
      dangerouslySetInnerHTML={{ __html: mkdText }}
      contentEditable={editable}
      suppressContentEditableWarning={editable}
    />
  )
}

export default Viewer
