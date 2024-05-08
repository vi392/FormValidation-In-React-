
import React,{useState} from "react";
function Parent(){
    const [data,fdata]= useState([])

    const mygetdata=()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((d)=>{
            return d.json()
        }).then((abc)=>{
            console.log(abc);
            fdata(abc);
        })
    }
    return( 
          <>
          <div className="container">
            <div className="row">
            <input type='button' value="fetchapi" onClick={mygetdata}/>
                
                 {data.map((obj)=>{
                    return(
                        <div className="col-md-3">
                    <div className="border p-2   bg-primary m-2">
                          <p>id:{obj.id}</p>
                          <p>Title:{obj.title}</p>
                          <p>Body:{obj.body}</p>
                    </div>
                    </div>
                    )
                 })}   
            </div>
          </div>
        </>
    )
}

export default Parent;