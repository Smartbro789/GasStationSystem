import { useState } from "react"
import {GlobalStateContext} from './globalStateContext.js'

export const GlobalState = (props)=>{

    const [ myCars, setMyCars ] = useState([{
        id:'sd65f41v8-sdf4156dsf-415-sdsd15',
        car:'Golf',
        plate:'gyo1440'
    }])

    const [fills, setFills] = useState([
        {
            date:'13/05',
            car:'GOLF',
            quantity:5.3,
            product:'Gasolina',
            value:25,
            plate:'GYO1440'
        },
    ])

    const data = {
        myCars,
        setMyCars,
        fills,
        setFills
    }

    return(
       <GlobalStateContext.Provider value={data}>
        {props.children}
       </GlobalStateContext.Provider>
    )
}