import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUsersQuery
} from "../../graphql/generated";
import {useState} from "react";

export const Users = () => {
  const { data: { users = [] } = {} } = useUsersQuery();
  const [createUser] = useCreateUserMutation({ refetchQueries: ["users"]});
  const [deleteUser] = useDeleteUserMutation({refetchQueries: ["users"]});
  const [updateUser] = useUpdateUserMutation();
  const [email, setEmail] = useState("");
  return (
    <>
      <h1>ユーザー作成</h1>
      <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
      <button
        onClick={() => {
          createUser({ variables: { params: { email: email } } });
          setEmail("");
        }}>
        登録
      </button>

      <h2>ユーザー一覧</h2>
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
    </>
  )
}
