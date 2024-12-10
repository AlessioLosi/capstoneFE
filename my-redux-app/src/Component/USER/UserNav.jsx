import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';


function MynavbarUser() {
  return (
    <Navbar expand="lg" className=" nav d-flex" >
      <Container>
        <Navbar.Brand href="/dashboardUser">
          <img src={logo} alt="logo" className="logonav" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto flex-column flex-lg-row align-items-lg-center">
            <Nav.Link href="/dashboardUser" className="black"><b>Home</b></Nav.Link>
            <Nav.Link href="/postUser" className="black"><b>Post</b></Nav.Link>
            <Nav.Link href="/profiloUser" className="black"><b>Profilo</b></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MynavbarUser;
