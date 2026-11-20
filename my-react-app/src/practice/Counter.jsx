import { useState } from "react";

function Echo() {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  function removeWord(index) {
    setWords(words.filter((w, i) => i !== index));
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setWords([...words, text])}>Add</button>
      <ul>
        {words.map((w, i) => (
          <li key={i}>
            {w}
            <button onClick={() => removeWord(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Echo;