function SessionItem({ session, onDelete }) {
  return (
    <li>
      {session.subject} - {session.minutes} min
      <button onClick={() => onDelete(session.id)}>Delete</button>
    </li>
  );
}

export default SessionItem;