import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated)
    return (
      <div>
        <h2>No autorizado</h2>
      </div>
    );

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <h1>KDSoft Login</h1>
        <div style={styles.authContainer}>
          <button
            onClick={loginWithRedirect}
            style={{ ...styles.loginButton, ...styles.google }}
          >
            Login con Google
          </button>
          <button
            onClick={loginWithRedirect}
            style={{ ...styles.loginButton, ...styles.github }}
          >
            Login con Github (test)
          </button>
        </div>
      </div>
    </div>
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
