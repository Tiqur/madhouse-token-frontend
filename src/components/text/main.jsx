const Text = (props) => {
  return (
    <p style={{...{
      display: props.inline ? 'inline' : 'block',
      color: props.color ? props.color : '#D7D7D7',
      fontWeight: props.weight ? props.weight : 'initial',
      fontStyle: props._style ? props._style : 'initial',
      fontSize: (props.size ? props.size : 'initial') + 'ch',
      fontFamily: props.family ? props.family : 'Open Sans',
      padding: props.padding ? props.padding : 'initial',
      margin: props.margin ? props.margin : 'initial'
    }, ...props.style}} children={props.children} id={props.id}/>
  )
}

export default Text;
