import AppModule from "./App.module.css";

export default function EjemploCSS() {
  const cuadradoAzul = {
    backgroundColor: "blue",
    width: "50px",
    height: "50px",
    marginLeft: "1rem",
  };
  const subt = "Este es un subtítulo desde mi variable";

  const duplicar = (valor: number) => valor * 2;

  const imagenURL =
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg";

  return (
    <>
      <div className="cuadradoRojo"></div>
      <div
        style={{
          backgroundColor: "green",
          width: "50px",
          height: "50px",
          marginLeft: "1rem",
        }}
      />
      <div style={cuadradoAzul}></div>

      <h3 style={{ color: "blue" }}>{subt.toUpperCase()}</h3>
      <h4 className="color">El doble de 4 es: {duplicar(4)}</h4>
      <h4 className={AppModule.colorinillo}>
        Style traído del module.App.css: El doble de 4 es: {duplicar(4)}
      </h4>      
    </>
  );
}
