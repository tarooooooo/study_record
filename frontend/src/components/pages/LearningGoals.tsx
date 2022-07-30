import {FC, memo, useState} from "react";
import {
  useCreateLearningGoalMutation,
  useDeleteLearningGoalMutation,
  useLearningGoalsQuery
} from "../../graphql/generated";
import { FormatLearningRecoadDateTime } from "../molecules/FormatLearningRecoadDateTime";
import {LearningRecord} from "../molecules/LearningRecord";

export const LearningGoals: FC = memo(() => {
  const [deleteLearningGoal] = useDeleteLearningGoalMutation( {refetchQueries: ["learningGoals"]} )
  const [createLearningGoal] = useCreateLearningGoalMutation({ refetchQueries: ["learningGoals"] } )
  const { data: { learningGoals = [] } = {} } = useLearningGoalsQuery();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return(
    <>
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
              {learning_goal.learningRecords.map((learning_record) => (
                <div key={learning_record.id}>
                  <FormatLearningRecoadDateTime startAt={learning_record.startAt} endingAt={learning_record.endingAt} />
                </div>
              ))}
            </p>
            <div>
              <LearningRecord learningGoalId={learning_goal.id}/>
            </div>
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
    </>
  )
});
