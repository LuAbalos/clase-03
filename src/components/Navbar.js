import CartWidget from './CartWidget'
import ItemListContainer from './ItemListContainer'

const NavBar = () => {
    return (
        <nav>
            <ul className="navegador">    
                <li>
                     <h2> MARINO VARETA </h2>
                    
                </li>
                <li>
                     <span> Home </span>
                </li>
                
                <li>
                   <span> Servicios </span>
                </li>
                
                <li>
                   <span> Productos </span>
                </li>
                
                <li>
                    <span> Contacto</span>
                </li>
                
                <li>
                    <span> Quienes somos</span>
                </li>
                
                <li>
                <ItemListContainer></ItemListContainer>
                <CartWidget></CartWidget>
                
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;