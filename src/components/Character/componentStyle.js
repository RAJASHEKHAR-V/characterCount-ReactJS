import styled from 'styled-components'

export const CharacterContainer = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CharacterCard = styled.div`
  background-color: #ffc533;
  height: 90%;
  width: 40%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const HeadingCard = styled.div`
  background-color: #ffbf1f;
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.yellow ? '#ffbf1f' : '#272c47')};
  font-weight: 500;
  font-size: 25px;
`

export const CounterCard = styled.ul`
  width: 100%;
  height: 60%;
  margin: 0px;
  padding: 0px 0px 0px 20px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const NoUserInputsImage = styled.img`
  width: 100%;
`

export const InputBody = styled.div`
  width: 40%;
  height: 90%;
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0px 20px 0px 20px;
`
export const FormCard = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputElement = styled.input`
  width: 70%;
  height: 35px;
  border: none;
  border-radius: 4px;
  padding-left: 10px;
  background-color: #ffffff;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 16px;
  outline: none;
`
export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: 1px solid #1e293b;
  background-color: #ffc533;
  border-radius: 10px;
  font-family: 'Roboto';
  color: #334155;
  font-weight: 500;
  font-size: 16px;
  outline: none;
`
