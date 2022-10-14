import React,{ useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'


const Home = () => {
  
  const [bodyPart, setbodyPart] = useState('all')
  const [exercises, setexercises] = useState([])
  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setbodyPart={setbodyPart} />
      <Exercises exercises={exercises} setexercises={setexercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home