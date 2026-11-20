import {useState} from "react";




function Drill2() {

    
const [words,setWords] = useState([]);
const [text,setText] = useState("");


    return(
        <div>
            <input value = {text} onChange = {(e) => setText(e.target.value)} />
            <button onClick = {() => setWords([...words, text])}>Add</button>
  <ul>
    {words.map((w, i) => (<li key={i}>{w}</li>))}
    
    </ul>

        </div>
    )
}

export default Drill2;