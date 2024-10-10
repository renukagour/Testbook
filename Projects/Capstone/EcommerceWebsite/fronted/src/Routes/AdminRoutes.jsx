/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Admin'


const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoutes