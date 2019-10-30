import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Response, SuccessResponse } from 'request-dot-js'

import { RootState } from 'types'
import * as Actions from 'redux/actions'

export function useGetter<T>(getter: () => Promise<Response<T>>, key: string) {
  const dispatch = useDispatch()

  useEffect(() => {
    getter().then(res => {
      dispatch(Actions.getter({ data: res, key }))
    })
  }, [key, getter, dispatch])

  const response = useSelector((state: RootState) => {
    const res = state.getter[key]
    if (!res || res.type !== 'success') return
    return res
  })

  return response as SuccessResponse<T> | undefined
}
