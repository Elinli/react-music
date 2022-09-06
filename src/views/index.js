import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Index() {
  return (
    <div>index

      <Outlet></Outlet>
    </div>
  )
}
