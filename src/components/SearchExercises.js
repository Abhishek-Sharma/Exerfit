import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'




const SearchExercises = ({ setexercises, bodyPart, setbodyPart }) => {
    const [search, setsearch] = useState('')
    
    const [bodyParts, setbodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async ()=> {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
            setbodyParts(['all', ...bodyPartsData])
        }

        fetchExercisesData()
    }, [])
    

    const handleSearch = async ()=>{
        if(search){
            console.log(search)
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
            console.log(exercisesData)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            
            setsearch('')
            setexercises(searchedExercises)

        }
    }

  return (
    <Stack 
        alignItems="center"
        mt="37px"
        justifyContent="center"
        p="20px"
    >
        <Typography
            fontWeight={700}
            sx={{
                fontSize:{ lg:'44px', xs:'30px' }
            }}
            mb="50px"
            textAlign="center"
        >
            Awesome Exercises You <br />
            Should Know
        </Typography>

        <Box 
            position="relative"
            mb="72px"
        >
            <TextField 
                sx={{
                    input:{
                        fontWeight:'700',
                        border:'none',
                        borderRadius:'5px'
                    },
                    width:{
                        lg:'800px',
                        xs:'350px'
                    },
                    backgroundColor:'#fff',
                    borderRadius:'40px'
                }}
                height="76px"
                value={search}
                onChange={(e) => setsearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />

            <Button className="search-btn" sx={{
                bgcolor:'#4e45f5',
                color:'#fff',
                textTransform:'none',
                width:{ lg:'175px', xs:'80px' },
                fontSize:{ lg:'20px', xs:'14px' },
                height:'56px',
                position:'absolute',
                right:'0'
            }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{
            position:'relative',
            width:'100%',
            p:'20px'
        }}>
            <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises