/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'

export const AdminDashboard = () => {
  return (
    <div className='p-10'
   >
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
               <Achievement/>
    </Grid>

        </Grid>
    </div>
  )
}
