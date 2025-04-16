const TodoItem = ({ todo, onDelete }) => {
    return (
      <li style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}>
        <span>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)} style={{ background: 'red', color: '#fff' }}>
          Sil
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  