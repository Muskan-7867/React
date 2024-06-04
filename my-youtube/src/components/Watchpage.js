import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../store/reducers/appSlice'

const Watchpage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  })
  return (
    <div>Watchpage</div>
  )
}

export default Watchpage