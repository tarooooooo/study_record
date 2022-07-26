import {FC, memo, useState} from "react";
import {
  useCreateLearningRecordMutation
} from "../../graphql/generated";

export const LearningRecord: FC = memo(() => {
  const [startAt, setStartAt] = useState("");
  const [endingAt, setEndingAt] = useState("");
  const [createLearningRecord] = useCreateLearningRecordMutation();
  return (
    <>
      <h1>学習レコード追加</h1>
      <div>
        <div>
          <label htmlFor="startAt">開始時間</label>
          <input id="startAt" type="datetime-local" step="1" value={startAt} onChange={(e) => {setStartAt(e.target.value)}} />
        </div>
        <div>
          <label htmlFor="endingAt">終了時間</label>
          <input id="endingAt" type="datetime-local" step="1" value={endingAt} onChange={(e) => {setEndingAt(e.target.value)}} />
        </div>

        <button
          onClick={() => {
            createLearningRecord({ variables: { params: { startAt: startAt, endingAt: endingAt, learningGoalId: 2 } } });
            setStartAt("");
            setEndingAt("");
          }}>
          登録
        </button>
      </div>
    </>
  )
});
