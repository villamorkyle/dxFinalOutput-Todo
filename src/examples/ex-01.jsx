import React from 'react';
import { List, Button } from 'antd';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <List
      dataSource={todos}
      renderItem={(todo, index) => (
        <List.Item>
          {todo}
          <Button onClick={() => deleteTodo(index)} danger>
            Delete
          </Button>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
