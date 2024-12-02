import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthLog, login } from "../redux/actions/login"; 
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};


export default MyLogin;
