import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };    console.log(task);

  return (
    <form onSubmit={handleSubmit}>
      <Card><Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <p><Button type="primary" htmlType="submit">
        Create Task
      </Button></p>
      </Card>
    </form>
  );
};

export default TodoForm;
