export default function User() {
  return (
    <h1>Usuario</h1>
    // <div>
    //   <img style={styles.userImage} src={user?.picture} alt={user?.name} />
    //   <h2>{user?.name}</h2>
    //   <p>{user?.email}</p>
    //   <button>Log out</button>
    // </div>
  );
}

const styles = {
  userImage: {
    borderRadius: "100%",
    margin: "0 auto",
    display: "block",
  },
};
