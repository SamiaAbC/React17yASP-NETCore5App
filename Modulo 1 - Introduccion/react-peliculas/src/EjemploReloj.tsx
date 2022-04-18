import { useEffect, useState } from "react";

export default function EjemploReloj(){
    const [fecha, setFecha] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  })
  return (
        <div>
      <h3>Ejemplo React</h3>
        <input/>
        <div>{fecha.toString()}</div>
    </div>
    );
}