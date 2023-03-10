import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography,Box } from '@mui/material'

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant='h3'>Book Store developed by Pardeep Chaurasiya</Typography>
        <Button LinkComponent={Link} to="/books" sx={{marginTop:15,background:"orangered"}} variant="contained">
          <Typography variant='h3'>View All Books</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home
