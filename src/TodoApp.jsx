import { Form, Layout, Row, Col } from 'antd';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { useMutation } from '@apollo/client';
import { ADD_TODO } from './queries';


const { Header, Content } = Layout;

const TodoApp = () => {
  const [form] = Form.useForm({ form: 'TodoForm' });
  const [addTodo] = useMutation(ADD_TODO);

  const onFinish = async (values) => {
    try {
      const { task } = values;
      if (task && task.trim() !== '') {
        await addTodo({
          variables: { task },
          refetchQueries: ['MyTask'],
        });

        form.resetFields();
      }
    }
    catch (error) {
      console.error('Error adding todo:', error);
    }
  }

  return (
    <Layout>
      <Header
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "black",
          minHeight: "75px",
          lineHeight: "70px",
          fontSize: "28px",
        }}
      >
        My To-Do{" "}
      </Header>
      <Row>
        <Col>
          <TodoForm onFinish={onFinish} Form={form} />
        </Col>
      </Row>

      <Content>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            fontSize: "28px",
          }}
        >
          Tasks
        </div>

        <div
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "blueviolet",
            minHeight: "500px",
            lineHeight: "50px",
          }}
        >
          <TodoList />
        </div>
      </Content>
    </Layout>
  );
};

export default TodoApp;