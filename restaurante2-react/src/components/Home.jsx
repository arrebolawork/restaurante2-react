import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [reservas, setReservas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const reservas = JSON.parse(localStorage.getItem("reservas"));
    if (reservas) setReservas(reservas);
  }, []);
  const handleRemove = () => {
    localStorage.removeItem("reservas");
    navigate("/reserve");
  };
  return (
    <div>
      <h1>Reservas</h1>

      {reservas.length === 0 ? (
        <h2>No tienes ninguna reserva</h2>
      ) : (
        <ul>
          {reservas.map((user) => (
            <li key={user.userEmail}>
              👉 {user.nombre}, {user.telefono} dia : {user.dia}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleRemove} className='formButton'>
        Borrar reservas
      </button>
    </div>
  );
}
