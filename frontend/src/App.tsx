import {
  useUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useLearningGoalsQuery, useCreateLearningGoalMutation, useDeleteLearningGoalMutation,
} from "./graphql/generated";
import {useState} from "react";

function App() {

  const { data: { users = [] } = {} } = useUsersQuery();
  const [createUser] = useCreateUserMutation({ refetchQueries: ["users"]});
  const [deleteUser] = useDeleteUserMutation({refetchQueries: ["users"]});
  const [updateUser] = useUpdateUserMutation();
  const [email, setEmail] = useState("");
  const { data: { learningGoals = [] } = {} } = useLearningGoalsQuery();
  const [createLearningGoal] = useCreateLearningGoalMutation({ refetchQueries: ["learningGoals"] } )
  const [deleteLearningGoal] = useDeleteLearningGoalMutation( {refetchQueries: ["learningGoals"]} )
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
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
      <h1>学習目標作成</h1>
      <div>
        <div>
          <label htmlFor="title">タイトル</label>
          <input id="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div>
          <label htmlFor="body">本文</label>
          <input id="body"value={body} onChange={(e) => {setBody(e.target.value)}} />
        </div>

        <button
          onClick={() => {
            createLearningGoal({ variables: { params: { title: title, body: body, userId: 1 } } });
            setTitle("");
            setBody("");
          }}>
          登録
        </button>
      </div>
      <h2>学習目標一覧</h2>
      <div>
        {learningGoals.map((learning_goal) => (
          <div key={learning_goal.id}>
            <p>
              {learning_goal.title}
            </p>
            <p>
              {learning_goal.body}
            </p>
            <p>
              <button onClick={() => {
                deleteLearningGoal( {variables: { id: learning_goal.id } })
              }}>
                削除
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
