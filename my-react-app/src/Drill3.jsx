import {useState} from "react";


function Drill3(){
    const [words,setWords] = useState([]);
    const [text,setText] = useState("");
    function removeWord(index) {
  setWords(words.filter((w, i) => i !== index));
}

    return(
        <div>
            <input value = {text} onChange = {(e) => setText (e.target.value)} />
                <button onClick = {() => setWords([...words, text])}>Add</button>
                <ul>
                    {words.map((w,i) => (
                        <li key = {i}>{w}
                        <button onClick={() => removeWord(i)}>Delete</button>
                        </li>
                    )
                    )
                    }
                </ul>



        </div>
    )


}

export default Drill3;
