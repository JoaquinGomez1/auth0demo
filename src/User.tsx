import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;

  if (!isAuthenticated)
    return (
      <div>
        <h2>No autorizado</h2>
      </div>
    );

  return (
    <div>
      <img style={styles.userImage} src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
    </div>
  );
}

const styles = {
  userImage: {
    borderRadius: "100%",
    margin: "0 auto",
    display: "block",
  },
};
