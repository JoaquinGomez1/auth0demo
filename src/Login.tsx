import { useState } from "react";

const listaUsuarios = [
  { usuario: "cuenta1", contraseña: "123" },
  { usuario: "cuenta2", contraseña: "123" },
];

export default function Login() {
  const [usuarioActual, setUsuarioActual] = useState("");
  const [datosActuales, setDatosActuales] = useState({
    usuario: "",
    contraseña: "",
  });

  const manejarCambioUsuario = (event: any) => {
    const valor = event.target.value;
    setDatosActuales({ ...datosActuales, usuario: valor });
  };
  const manejarCambioContraseña = (event: any) => {
    const valor = event.target.value;
    setDatosActuales({ ...datosActuales, contraseña: valor });
  };

  const login = () => {
    const usuario = datosActuales.usuario;
    const contraseña = datosActuales.contraseña;

    listaUsuarios.forEach((item) => {
      const usuarioCoincide = item.usuario == usuario;
      const contraseñaCoincide = item.contraseña == contraseña;

      if (usuarioCoincide && contraseñaCoincide) setUsuarioActual(item.usuario);
    });
  };

  const logout = () => setUsuarioActual("");

  return (
    <>
      {usuarioActual ? (
        <div>
          <h1>Hola {usuarioActual}</h1>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <>
          <h1>KDSoft Login</h1>
          <div style={styles.authContainer}>
            <form>
              <input onChange={manejarCambioUsuario} placeholder="Usuario" />
              <input
                onChange={manejarCambioContraseña}
                placeholder="Contraseña"
              />
            </form>
            <button
              onClick={login}
              style={{ ...styles.loginButton, ...styles.google }}
            >
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
}

const styles = {
  pageContainer: {
    maxWidth: "1024px",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  },
  contentContainer: {
    display: "grid",
  },
  authContainer: {
    display: "grid",
  },
  loginButton: {
    padding: "8px 12px",
    outline: "none",
    border: "none",
    borderRadius: "4px",
    fontSize: 18,
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    margin: "8px 0",
  },
  google: {
    backgroundColor: "#4285F4",
  },
  github: {
    color: "rgba(0,10,55,.8)",
  },
};
