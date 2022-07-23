import React, {useState} from 'react'
import { useDispatch, useSelector} from "react-redux"
import { GET_EVENTS, SHOW_EVENTS_USER,ADD_REMOVE_FILTER } from '../Redux/ActionTypes/actiontypes'
import styles from '../Styles/ButtonFilter.module.css'

function ButtonFilter() {

    let [controlFilter, setReference] = useState([])

    const backUp = useSelector(state => state.eventsBackUp)
    const allEvents = useSelector(state => state.allEvents)
    const dispatch = useDispatch()

    let cities = Array.from(new Set(backUp.slice().map(el => el.City)))
    let categories = Array.from(new Set(backUp.slice().map(el => el.Category[0])))
    console.log(categories)
    
    let cityFilters = ["CABA", "La Plata", "Chascomus", "Rosario", "Resistencia"]
    


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
    <div className={styles.filtercontainer}>
    <label>Filter By</label>
    <div>
    <select className={styles.select} onChange={(e) => handleSelect(e)}>
        <option hidden>City</option>
    {cities.map((el,i) => <option key={i} className="select" onClick={() => filterItems(el)}>{el}</option>)}

    </select>
    </div>
    <div>
        <select className={styles.select}  onChange={(e) => handleSelect(e)}>
            <option hidden>Categories</option>
            {categories.map(el => <option className='select' onClick={() => filterItems(el)}>{el}</option>)}
        </select>
    </div>
    <div>

        <button className={styles.Button2} onClick={()=> {return setReference(controlFilter = []), dispatch({type: GET_EVENTS, payload: backUp }), dispatch({type: SHOW_EVENTS_USER, payload: backUp.slice(0,15)})}}>Clear Filters</button>

    </div>
</div>
  )
}

export default ButtonFilter