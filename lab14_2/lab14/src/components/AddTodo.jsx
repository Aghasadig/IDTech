import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Yeni tapşırıq daxil et"
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Əlavə et</button>
    </div>
  );
};

export default AddTodo;
