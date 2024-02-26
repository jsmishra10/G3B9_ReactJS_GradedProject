
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import './utils/styles.css';


const NavigationMenu = () => {


    return (
        <>
            <Container fluid>

            <Navbar className="bg-body-tertiary" >
                
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant="tabs" >
                            <Nav.Item >
                                <Nav.Link href="/movie-manager" eventKey="1"><b>Home</b></Nav.Link>
                            </Nav.Item>                           
                            <Nav.Item>
                                <Nav.Link href="/favorites" eventKey="6" ><b>My Favorites</b></Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Search Movie List" className="styleDropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/comingsoon" className="styleDropdown" >Upcoming Movies</NavDropdown.Item>
                                <NavDropdown.Item href="/movieintheater">Current Movies</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/topindianmovies">Top Rated Movies(India)</NavDropdown.Item>
                                
                                <NavDropdown.Item href="/topmovies">Top Rated Movies (Global)</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                
            </Navbar>
            </Container>
            <br />

        </>
    );

}



export default NavigationMenu;