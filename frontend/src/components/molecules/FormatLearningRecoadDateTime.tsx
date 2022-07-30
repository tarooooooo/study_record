import { FC } from "react";
import { useLearningRecordDateTime } from "../../containers/LearningGoalsPage/hooks/useLearningRecordDateTime"

type LearningRecordDatetimeType = {
  startAt: string;
  endingAt: string;
}

type NewType = FC<LearningRecordDatetimeType>;

export const FormatLearningRecoadDateTime: NewType = (props) => {
  const { startAt, endingAt } = props;
  const { learningRecordDateTime: format_startAt } = useLearningRecordDateTime(startAt)
  const { learningRecordDateTime: format_endingAt } = useLearningRecordDateTime(endingAt)

  return (
    <>
     <p>{format_startAt} ~ {format_endingAt}</p>
    </>
  )
}