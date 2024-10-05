import React from "react"

export default function App(){
   const [thingsArray,setThingsArray] = React.useState(["Thing 1","Thing 2"])
   function addItem(){
    setThingsArray(prevThingsArray=>{ return[...prevThingsArray,`Thing ${prevThingsArray.length+1}`]})
   }
   const thingsElement = thingsArray.map(thing=><p key={thing}>{thing}</p>)
    return(
        <div>
            <button onClick={addItem}>AddItem</button>
            {thingsElement}
        </div>
    )
}

