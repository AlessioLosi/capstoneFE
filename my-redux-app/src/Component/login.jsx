import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthLog, login } from "../redux/actions/login"; 
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from '../assets/logo.png';

const MyLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  
      await dispatch(login(formData)); 

      dispatch(AuthLog()); 

      const user = JSON.parse(localStorage.getItem("userData")); 
      console.log("User:", user);

      if (user && user.tipologiaUtente === "ADMIN") {
        navigate("/dashboardAdmin"); 
      } else if (user && user.tipologiaUtente ==="USER") {
        navigate("/dashboardUser");
      }
    } catch (error) {
      setErrorMessage("Credenziali errate, per favore riprova.");
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center bg-dark bglog "
    >
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <img src={logo} alt="logo" className="logo" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <h1 className="text-light">Accedi</h1>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-center">
        <Col xs={10} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <form onSubmit={handleSubmit} className="w-100">
            <div>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>

            <div className="mb-3">
              <input
               placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-100 p-2"
              />
            </div>
            <div className="mb-3">

              <input
              placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-100 p-2"
              />
            </div>
            <Button variant="light" size="lg" type="submit" className="w-100 mb-3 purple">
              Login
            </Button>

            <p className="text-center text-light">Oppure</p>

            <Link to="/register">
              <Button variant="light" size="lg" className="w-100 purple">
                Registrati
              </Button>
            </Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
};


export default MyLogin;
