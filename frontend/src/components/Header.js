import { Navbar, Nav, NavGroup, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar dark expand='md' sticky='top'>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i /> Counter
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/bmi'>
                        <i /> BMI
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/todo'>
                        <i /> To-do
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
};

export default Header;