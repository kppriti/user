import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom';
function Header() {
    return (
        <>
            <div className="header_section">
                <Navbar bg="dark" variant="dark" className='main_header'>
                    <Container>
                        <Navbar.Brand href="#home" className='logo_header'>
                        <img src={require("../image/logo.png")}></img>
                        </Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home active" >Home</Nav.Link>
                            <Nav.Link href="#features"><Link to='/about'>About Us</Link> </Nav.Link>
                            <Nav.Link href="#pricing"><Link to='/gallery'>Gallery</Link> </Nav.Link>
                            <Nav.Link href="#pricing"><Link to='/services'>Services</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link to='/contact us'>Contact Us</Link></Nav.Link>
                        </Nav>
                        < BsSearch className='icon'/>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header;