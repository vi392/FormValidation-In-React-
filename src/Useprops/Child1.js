
import react from 'react';

function Child1(props){
    return(
        <>

        <h2>this is a Child1 components</h2>
        <h2>name is :{props.abc}</h2>
         <button onClick={props.fun}>Click me</button>
        </>
    )
}

export default Child1;