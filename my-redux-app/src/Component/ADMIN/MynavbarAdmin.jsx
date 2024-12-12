import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { logout } from '../../redux/actions/login';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


function MynavbarAdmin() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar expand="lg" className=" nav d-flex" >
      <Container>
        <Navbar.Brand href="/dashboardAdmin">
          <img src={logo} alt="logo" className="logonav" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className='toggle'/>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto flex-column flex-lg-row align-items-lg-center">
            <Nav.Link href="/dashboardAdmin" className="black testo"><b>Home</b></Nav.Link>
            <Nav.Link href="/post" className="black testo"><b>Post</b></Nav.Link>
            <Nav.Link href="/gestioneEventi" className="black testo"><b>Gestione Eventi</b></Nav.Link>
            <Nav.Link href="/profilo" className="black testo"><b>Profilo</b></Nav.Link>
            <Button onClick={handleLogout} className=' logout text-center border-0 ms-5 '>
              <b>Logout</b>
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MynavbarAdmin;

