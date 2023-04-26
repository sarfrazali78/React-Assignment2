import './Namechanger.css'
import {Fragment, useState} from 'react'

export default function NameChanger () {

    const [name , setName] = useState('jai')
   

    function handleClick () {

        name === 'jai' ? setName('viru') :  setName('jai')

    }

    return (
       <Fragment>
            <h1>my name is {name}</h1>
            <button onClick={handleClick}>change name</button>

            
       </Fragment>
    )
}