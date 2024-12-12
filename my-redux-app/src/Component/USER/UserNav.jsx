import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { logout } from '../../redux/actions/login';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


function MynavbarUser() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar expand="lg" className=" nav d-flex" >
      <Container>
        <Navbar.Brand href="/dashboardUser">
          <img src={logo} alt="logo" className="logonav" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto flex-column flex-lg-row align-items-lg-center">
            <Nav.Link href="/dashboardUser" className="black testo"><b>Home</b></Nav.Link>
            <Nav.Link href="/postUser" className="black testo"><b>Post</b></Nav.Link>
            <Nav.Link href="/profiloUser" className="black testo"><b>Profilo</b></Nav.Link>
            <Button onClick={handleLogout} className=' logout ms-5'>
              Logout
              </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MynavbarUser;
