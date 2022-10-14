import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box 
        sx={{
            // mt(default lg =212px)
            mt:{ lg:'152px', xs:'70px' },
            ml:{ sm:'50px' }
        }}
        position="relative" 
        p="20px"
    >
        <Typography 
            color="#4e45f5" 
            fontWeight="600px" 
            fontSize="26px"
        >
            Shape Your Body
        </Typography>

        <Typography 
            fontWeight={700} 
            sx={{
                fontSize:{ lg:'44px', xs:'40px' }
            }}
            mb="20px" mt="22px" 
        >
            Let's Become Fit and <br/> Be Perfect
        </Typography>

        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={4}
        >
            Check out the most effective exercises
        </Typography>

        <Button 
            variant="contained" 
             
            href="#exercises" 
            sx={{
                backgroundColor:"#4e45f5",
                padding:'13px 30px'
        }}>Explore Exercises</Button>

        <Typography
            fontWeight={600}
            color="#4e45f5"
            sx={{
                opacity:"0.1",
                display: { lg:'block', xs:'none' }
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>

        <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />

    </Box>
  )
}

export default HeroBanner