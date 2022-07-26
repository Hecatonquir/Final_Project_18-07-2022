import React, {useState} from 'react'
import { useDispatch, useSelector} from "react-redux"
import { GET_EVENTS, SHOW_EVENTS_USER,ADD_REMOVE_FILTER } from '../Redux/ActionTypes/actiontypes'
import styles from '../Styles/ButtonFilter.module.css'
import { Box, Button, Flex, Select, Stack} from '@chakra-ui/react';

function ButtonFilter() {

    let [controlFilter, setReference] = useState([])

    const backUp = useSelector(state => state.eventsBackUp)
    const allEvents = useSelector(state => state.allEvents)
    const dispatch = useDispatch()

    let cities = Array.from(new Set(backUp.slice().map(el => el.City)))
    let categories = Array.from(new Set(backUp.slice().map(el => el.Category[0])))

    function filterItems(el) {
     
        if(!controlFilter.includes(el)) {
          setReference(controlFilter = [el])
        
          let notFiltered =[]
          let filtered = backUp.filter(e => {
              let foundCat = e.Category.find(g =>  g === el) 
              
              if(foundCat || e.City === el ) {
              return e
              }
              
              else{
                notFiltered.push(e)
              }
          })
        
          dispatch({type: ADD_REMOVE_FILTER, payload: notFiltered })
          if(filtered.length > 0) {
          dispatch({type: GET_EVENTS, payload: filtered})
          return dispatch({type: SHOW_EVENTS_USER, payload: filtered})
          }
         
          
          else if(filtered.length < 1) {
            setReference(controlFilter = controlFilter.filter(e => e !== el))
              return alert("No match for this filter")
          }
        }
        else{
          setReference(controlFilter = controlFilter.filter(e => e !== el))
          if(backUp.length > 0) {
          let matchers = 0
          let finalMatch = []
          for(let i = 0; i<backUp.length; i++ ) {
            controlFilter.forEach(g => {
               
                let suMatcherC = backUp[i].Category.find(e => e === g)
              if(backUp[i].City === g||suMatcherC) {
                matchers ++
              }
            })
            if(matchers === controlFilter.length) {
              finalMatch = finalMatch.concat(backUp[i])
              matchers = 0
            }
            else{
              matchers = 0
            }
          }
         
          dispatch({type: GET_EVENTS, payload: Array.from(new Set(allEvents.concat(finalMatch)))})
          dispatch({type: SHOW_EVENTS_USER, payload: finalMatch})
          }
        }
      }
    

    let handleSelect = (e) => {
        // eslint-disable-next-line default-case
        
          return filterItems(e.target.value)
    }

  return (
    <>
    <Stack spacing={10} marginTop={6} marginBottom={6}>
    <Flex justifyContent='space-around' width='100%'>
      <Select variant='flushed' width='30%' onChange={(e) => handleSelect(e)} color='gray' id='city'>
        <option value='City'>Filter By City</option>
        {cities.map((el,i) => <option key={i} onClick={() => filterItems(el)}>{el}</option>)}
      </Select>

      <Select variant='flushed' width='30%' onChange={(e) => handleSelect(e)} color='gray' id='cat'>
        <option value='Categories'>Filter By Categories</option>
        {categories.map(el => <option onClick={() => filterItems(el)}>{el}</option>)}
      </Select>

      <Box>
      <Button className={styles.Button2} onClick={()=> { document.getElementById('city').value = 'Filter By City'; document.getElementById('cat').value = 'Filter By Categories'; return setReference(controlFilter = []), dispatch({type: GET_EVENTS, payload: backUp }), dispatch({type: SHOW_EVENTS_USER, payload: backUp.slice(0,15)})}} bg='#f4a69a'>Clear Filters</Button>
      </Box>
    </Flex>
    </Stack>
 </>
)
}

export default ButtonFilter