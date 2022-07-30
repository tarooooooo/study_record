import { renderHook } from "@testing-library/react"
import { useLearningRecordDateTime } from "./useLearningRecordDateTime"

describe('useLearningRecordDateTime', () => {
  it('should return formatted learning_record_date_time', () => {
    const { result } = renderHook(() => 
      useLearningRecordDateTime('2020-06-11T00:00:00Z')
    )
    expect(result.current.learningRecordDateTime).toBe('2020-06-11 09:00')
  })
  it('should return undefined when without learning_record_date_time', () => {
    const { result } = renderHook(() => 
      useLearningRecordDateTime(null)
    )
    expect(result.current.learningRecordDateTime).toBe(undefined)
  })
})