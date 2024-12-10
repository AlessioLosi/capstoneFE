import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';


function MynavbarAdmin() {
  return (
    <Navbar expand="lg" className=" nav d-flex" >
      <Container>
        <Navbar.Brand href="/dashboardAdmin">
          <img src={logo} alt="logo" className="logonav" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto flex-column flex-lg-row align-items-lg-center">
            <Nav.Link href="/dashboardAdmin" className="black"><b>Home</b></Nav.Link>
            <Nav.Link href="/post" className="black"><b>Post</b></Nav.Link>
            <Nav.Link href="/gestioneEventi" className="black"><b>Gestione Eventi</b></Nav.Link>
            <Nav.Link href="/profilo" className="black"><b>Profilo</b></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MynavbarAdmin;

