import {useUsersQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation} from "./graphql/generated";
import {useState} from "react";

function App() {

  const { data: { users = [] } = {} } = useUsersQuery();
  const [createUser] = useCreateUserMutation({ refetchQueries: ["users"]});
  const [deleteUser] = useDeleteUserMutation({refetchQueries: ["users"]});
  const [updateUser] = useUpdateUserMutation();
  const [email, setEmail] = useState("");
  return (
    <div>
      <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
      <button
        onClick={() => {
          createUser({ variables: { params: { email: email } } });
          setEmail("");
        }}>
        登録
      </button>
      {users.map((user) => (
        <div key={user.id}>
          <input
            value={user.email || ""}
            onChange={(e) =>
              updateUser({
                variables: { id: user.id, params: {email: e.target.value} },
              })
            }
          />
          <button onClick={() => deleteUser({variables: {id: user.id}})}>
            削除
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
