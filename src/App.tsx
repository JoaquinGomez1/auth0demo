import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import User from "./User";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        {isAuthenticated ? <User /> : <Login />}
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
};

export default App;
