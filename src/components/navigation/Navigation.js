import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationTool() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    

                <Nav className="me-auto">
                    <NavDropdown title="Experiences" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1" as={Link} to="/thesis">Thèse de doctorat</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2" as={Link} to="/cci-idf">CCI-IDF</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3" as={Link} to="/coexya">Coexya</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Appenin</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/parcours">Parcours</Nav.Link>
                    <Nav.Link as={Link} to="/cci-idf">Publication</Nav.Link>
                    <Nav.Link as={Link} to="/coexya">Compétences</Nav.Link>
                </Nav>
                
            </Container>
        
   
        </Navbar>
    )
}

export default NavigationTool

/*
  
*/