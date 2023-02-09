import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h1' sx={{flexGrow:1}}>

        </Typography>
      </Toolbar>
      </AppBar>
  )
}

export default Header