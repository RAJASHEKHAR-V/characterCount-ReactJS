import {ListItem, ParaGraph} from './componentStyle'

const CharacterCount = props => {
  const {charItem} = props
  const {char, charLength} = charItem

  return (
    <ListItem>
      <ParaGraph>
        {char} : {charLength}
      </ParaGraph>
    </ListItem>
  )
}

export default CharacterCount
