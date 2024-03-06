import React from 'react'
import MyList from './MyList';

function MyComp({dList,onClick}){
    return (
        <div style={{display:"flex"}}>
        <button  onClick={onClick}>Click me</button>
        {dList && <MyList/>}
        </div>
    )
}

export default MyComp;