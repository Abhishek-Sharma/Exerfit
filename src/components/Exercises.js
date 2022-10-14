import { Box , Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader';


const Exercises = ({ exercises, setexercises, bodyPart }) => {

  const [currentPage, setcurrentPage] = useState(1)
  const exercisesPerPage=9

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setexercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexLastExercise=currentPage*exercisesPerPage
  const indexFirstExercise=indexLastExercise-exercisesPerPage
  const currentExercises = exercises.slice(indexFirstExercise, indexLastExercise)
  
  const paginate=(e, value)=>{
    setcurrentPage(value)
    window.scrollTo({ top:1800, behavior:'smooth' })
  }

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="exercises"
      sx={{
        mt:{ lg:'110px' }
      }}
      mt="50px"
      p="20px"
    >
        <Typography variant="h4" mb="46px" >
          Your Searched Result
        </Typography>
        <Stack direction="row" sx={{
          gap:{ lg:'110px', xs:'50px' }
        }} flexWrap="wrap" justifyContent="center" >
          {currentExercises.map((exercise, index)=>(
              <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>

        <Stack mt="100px" alignItems="center" >
            {exercises.length > 9 && (
              <Pagination 
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
        </Stack>

    </Box>
  )
}

export default Exercises