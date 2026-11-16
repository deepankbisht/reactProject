import axios from "axios";
import { useState } from "react";

export function App() {

    const [data,setData] = useState<any[]>([]);
    console.log("hi");
    
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            setData(response.data)
        })

    return <div>
        Linked Post : 
        {data.map( todo => <Post title={todo.title} body={todo.body} /> )}
    </div>
}

export default App;


const Post = (props:any)=>{
    return <div style={{backgroundColor:"grey" , fontSize:20, border: "2px solid black" , borderRadius:"25px", padding:10,margin:20}} >
        <div>
            <b>{props.title}</b>
        </div>
        <div>
            {props.body}
        </div>
    </div>
}