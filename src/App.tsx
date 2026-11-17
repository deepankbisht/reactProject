import axios from "axios";
import { useEffect, useState } from "react";
// "https://jsonplaceholder.typicode.com/posts"
export function App() {

    const [currButton,setButton] = useState(1);
    
    return <div>
        <button onClick={function(){
            setButton(1);
        }} >1</button>
        <button onClick={function(){
            setButton(2);
        }} >2</button>
        <button onClick={function(){
            setButton(3);
        }} >3</button>
        <button onClick={function(){
            setButton(4)
        }} >4</button>
        <div>{currButton}</div>
        <TodoButton id={currButton} />
    </div>
}

export default App;


export function TodoButton(props){
    const [curTodo,setTodo] = useState();
    const id = props.id;
    useEffect(()=>{
        {axios.get("https://jsonplaceholder.typicode.com/posts/"+ id )
        .then(response => {
            setTodo(response.data.title)
        } )}
    },[id])
    return <div>
        {curTodo}
    </div>
}
// const Post = (props:any)=>{
//     return <div style={{backgroundColor:"grey" , fontSize:20, border: "2px solid black" , borderRadius:"25px", padding:10,margin:20}} >
//         <div>
//             <b>{props.title}</b>
//         </div>
//         <div>
//             {props.body}
//         </div>
//     </div>
// }