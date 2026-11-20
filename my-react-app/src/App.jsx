import { useState, useEffect } from "react";
import SessionItem from "./SessionItem.jsx";
import Reviews from "./Reviews.jsx";
import Greeting from "./Practice.jsx";
import Counter from "./Counter.jsx";
import WorldList from "./WorldList";
import Counter2 from "./Counter2";
import Drill2 from "./Drill2";
import Drill3 from "./Drill3";
import Counter3 from "./Counter3.jsx";



function App() {
 const [sessions, setSessions] = useState(
  () => JSON.parse(localStorage.getItem("sessions")) || []
);

useEffect(() => {
  localStorage.setItem("sessions", JSON.stringify(sessions));
}, [sessions]);
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState("");

  function addSession() {
    if (subject === "" || Number(minutes) <= 0) {
      return;
    }
    setSessions([...sessions, { id: Date.now(), subject: subject, minutes: Number(minutes) }]);
    setSubject("");
    setMinutes("");
  }

  function removeSession(id) {
    setSessions(sessions.filter(s => s.id !== id));
  }
  let total = 0;

  function clearAll() {
  setSessions([]);
}

sessions.forEach(s => {
  total = total + s.minutes;
});

   return (
    <div>
      <h1>Study Tracker</h1>
      <p>Total: {total} min</p>
      <input
        value={subject}
        onChange={e => setSubject(e.target.value)}
        placeholder="Subject"
      />
      <input
        type="number"
        value={minutes}
        onChange={e => setMinutes(e.target.value)}
        placeholder="Minutes"
      />
      <button onClick={addSession}>Add</button>

      <button onClick={clearAll}> Clear all </button>
      <ul>
        {sessions.map(s => (
          <SessionItem key={s.id} session={s} onDelete={removeSession} />
        ))}
      </ul>

      <Reviews />
      <Greeting name = "Layla" />
       <Greeting name = "Omar" />
       <Counter/>
       <WorldList/>
       <Counter2/>
       <Drill2/>
       <Drill3/>
       <Counter3/>
    </div>
  );
}

export default App;