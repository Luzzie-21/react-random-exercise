import { DeleteButtonStyled } from "./styles/DeleteButton.styled"

const DeleteButton = ({ onPress}) => { 
    return (
        <DeleteButtonStyled onClick={ onPress }>Delete</DeleteButtonStyled>
    )
}

export default DeleteButton



