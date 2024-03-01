import styled from "styled-components";

export const ButtonStyled = styled.button`
background: #7ae7b6;
boder-radius: 50px;
border:1px solid var(--accent-color);
font-weight: bold;
display: inline-block;
margin: 0.5rem 1rem;
padding: 0.5rem 0;
transition: all 200ms ease-in-out;
width: 11rem;

&:hover {
    filter: brightness(0.85);
}
&:active {
    filter: brightness(1)
}
`