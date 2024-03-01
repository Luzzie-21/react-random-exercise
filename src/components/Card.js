import { StyledCard } from "./styles/Card.styled";
import DeleteButton from "./DeleteButton";

const Card = ({onPress, title, url }) => {
    return (
        <StyledCard>
            <div className="card-header">
                <h3>{title}</h3>
                <DeleteButton onPress={onPress}></DeleteButton>
            </div>
            
            <a href={url} target="_blank" rel="noopener noreferrer">Watch me!</a>
            
        </StyledCard>
    )
 }

export default Card;