import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavB () {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>                    
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">About Me</Nav.Link>
                        <Nav.Link href="#pricing">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>        
        </>
    )
};

export default NavB;
