import React, { useState } from 'react';
import TodoForm from './ex00';
import TodoList from './ex-01';
import { Layout, Row, Col } from 'antd';

const { Header, Content } = Layout;

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white',
                        textAlign: 'center' }}>My To-Do</h1>
      </Header>

      <Content style={{ padding: '20px', width: '50%',
                  lineHeight: '3', }}
                  class="flex justify-center items-center h-screen">

        <Row justify="center">

          <Col span={12}>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
