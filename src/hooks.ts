import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Response, SuccessResponse } from 'request-dot-js'

import { RootState } from 'types'
import * as Actions from 'redux/actions'

/**
 * Invokes `getter`, throws response into `getter` branch under `key`, and returns response from this branch.
 *
 * Data is only refetched if `key` changes; passing in a new `getter` function alone doesn't refetch data.
 */
export function useGetRedux<T>(key: string, getter: () => Promise<Response<T>>) {
  const dispatch = useDispatch()
  console.log('useGetRedux')

  useEffect(() => {
    console.log('useGetRedux - useEffect')
    getter().then(res => {
      dispatch(Actions.getter({ data: res, key }))
    })
  }, [dispatch, key]) // eslint-disable-line

  const response = useSelector((state: RootState) => {
    const res = state.getter[key]
    if (!res || res.type !== 'success') return
    return res
  })

  return response as SuccessResponse<T> | undefined
}
