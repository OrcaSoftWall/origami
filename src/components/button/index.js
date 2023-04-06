import styled from 'styled-components'

const CommonButton = ({ type, title, onClick }) => {
  return (
    <Button data-test-id={`button-${title}`} type={type} onClick={onClick}>{title}</Button>
  )
}

export default CommonButton

const Button = styled.button`
    display: inline;
    background-color: #234465;
    color: white;
    padding: 1%;
    min-width: 4em;
    border-radius: 6px;
    margin: 0 auto;
    border: none;
    margin-top: 0.5%;
    border: 2px solid white;
    margin-bottom: 2%;
    cursor: pointer;

&:hover {
    background-color: white;
    border: 2px solid #234465;
    color: #234465;
    font-style: italic;
}`