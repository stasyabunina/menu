import { NavLink } from 'react-router-dom';

function Menu() {
    const isActive = ({ isActive }) =>
        isActive ? "menu__item menu__item-active" : "menu__item";

    return (
        <nav className='menu'>
            <NavLink className={isActive} to='/'>Главная</NavLink>
            <NavLink className={isActive} to='/drift'>Дрифт-такси</NavLink>
            <NavLink className={isActive} to='/timeattack'>Time attack</NavLink>
            <NavLink className={isActive} to='/forza'>Forza karting</NavLink>
        </nav>
    );
}

export default Menu;