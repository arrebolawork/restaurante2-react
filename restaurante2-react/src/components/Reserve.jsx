import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const userInitialState = {
  nombre: "",
  userEmail: "",
  telefono: "",
  dia: "",
};
export default function Reserve() {
  const navigate = useNavigate();
  const [user, setUser] = useState(userInitialState);
  const [error, setError] = useState(false);
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.nombre.trim().length < 3) {
      setError(true);
      return;
    }

    setError(false);

    let reservas = JSON.parse(localStorage.getItem("reservas"));

    if (!Array.isArray(reservas)) {
      reservas = [];
    }

    reservas.push(user);

    localStorage.setItem("reservas", JSON.stringify(reservas));
    setUser(userInitialState);
    navigate("/");
  };

  const muestraMensaje = () => {
    return (
      <div>
        <p>El nombre debe contener al menos 3 letras</p>
      </div>
    );
  };
  return (
    <>
      <form className='formContent' onSubmit={handleSubmit}>
        <div className='formLabelInput'>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' id='nombre' value={user.nombre} onChange={handleInputChange} />
        </div>
        <div className='formLabelInput'>
          <label htmlFor='userEmail'>Email</label>
          <input type='email' name='userEmail' id='userEmail' value={user.userEmail} onChange={handleInputChange} />
        </div>
        <div className='formLabelInput'>
          <label htmlFor='telefono'>Telefono</label>
          <input type='tel' name='telefono' id='telefono' value={user.telefono} onChange={handleInputChange} />
        </div>
        <div className='formLabelInput'>
          <label htmlFor='dia'>Día</label>
          <input type='date' name='dia' id='dia' value={user.dia} onChange={handleInputChange} />
        </div>
        <input type='submit' value='Enviar' className='formButton' />
      </form>
      {error && muestraMensaje()}
    </>
  );
}
