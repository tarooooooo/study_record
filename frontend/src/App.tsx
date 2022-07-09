import { useUsersQuery } from "./graphql/generated";



function App() {

  const { data: { users = [] } = {} } = useUsersQuery();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
}

export default App;
