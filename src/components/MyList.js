import React from 'react';
const itemList =["Item1","item2","Item3"];
const listElement = itemList.map(item=><li>{item}</li>);
function MyList(){
return(
    <div>
        <ul>{listElement}</ul>
    </div>
)
}
export default MyList;