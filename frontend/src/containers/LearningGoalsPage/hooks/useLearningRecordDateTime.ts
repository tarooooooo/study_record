import { DateTime } from 'luxon'
import {useMemo} from "react";

export const useLearningRecordDateTime = (
  learningRecordDateTimeResponse: string | null
) =>  {
  const learningRecordDateTime = useMemo(() => {
    if(!learningRecordDateTimeResponse){
      return undefined
    }

    return DateTime.fromISO(learningRecordDateTimeResponse, { 
      zone: 'Asia/Tokyo',
    }).toFormat('yyyy-MM-dd HH:mm')
  }, [learningRecordDateTimeResponse])

  return {
    learningRecordDateTime,
  }
}
