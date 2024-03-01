import { ButtonStyled } from "./styles/Button.styled";

const Button = ({ onPress, title}) => { 
    return (
        <ButtonStyled onClick={onPress}>{title}</ButtonStyled>
    )
}

export default Button

