import './style'
import { Div, StyledLink } from './style';
import { Link } from "react-router-dom";



const MenuLateral = () => {
    return ( 
        <Div>
            <StyledLink to={'/'}>Home</StyledLink>
            <StyledLink to={'/Game'}>Game</StyledLink>
            <StyledLink to={'/Console'}>Console</StyledLink>
            <StyledLink to={'/Artigo'}>Artigos</StyledLink>
        </Div>
     );
}
 
export default MenuLateral;