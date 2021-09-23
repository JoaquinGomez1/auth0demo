import Login from "./Login";

function App() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <Login />
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
