import { StyledCard } from "./styles/Card.styled";
import DeleteButton from "./DeleteButton";

const Card = ({onPress, title, url }) => {
    return (
    //     <div className="card">
    //         <div className="card-body">
    //     <h3>{props.title}</h3>
    //     {/* <a href={props.link} target="_blank" rel="noopener noreferrer"></a> */}
    //   </div>
        //     </div>
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