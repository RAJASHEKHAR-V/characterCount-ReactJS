import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterCount from '../CharacterCounter'

import {
  CharacterContainer,
  CharacterCard,
  HeadingCard,
  Heading,
  CounterCard,
  NoUserInputsImage,
  InputBody,
  FormCard,
  InputElement,
  Button,
} from './componentStyle'

class Character extends Component {
  state = {
    characterList: [],
    inputCharacter: '',
  }

  onChangeOfCharacter = event => {
    this.setState({
      inputCharacter: event.target.value,
    })
  }

  onAddButton = event => {
    event.preventDefault()
    this.setState(prevState => ({
      characterList: [
        ...prevState.characterList,
        {
          char: prevState.inputCharacter,
          charLength: prevState.inputCharacter.length,
          id: uuidv4(),
        },
      ],
      inputCharacter: '',
    }))
  }

  render() {
    const {characterList, inputCharacter} = this.state

    return (
      <CharacterContainer>
        <CharacterCard>
          <HeadingCard>
            <Heading>Count the characters like a boss...</Heading>
          </HeadingCard>
          <CounterCard>
            {characterList.length > 0 &&
              characterList.map(eachItem => (
                <CharacterCount key={eachItem.id} charItem={eachItem} />
              ))}
            {characterList.length === 0 && (
              <NoUserInputsImage
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </CounterCard>
        </CharacterCard>
        <InputBody>
          <Heading yellow>Character Counter</Heading>
          <FormCard onSubmit={this.onAddButton}>
            <InputElement
              placeholder="Enter the Characters here"
              type="text"
              onChange={this.onChangeOfCharacter}
              value={inputCharacter}
            />
            <Button type="submit">Add</Button>
          </FormCard>
        </InputBody>
      </CharacterContainer>
    )
  }
}

export default Character
