import { Input, Button, Card, Form } from 'antd';

const TodoForm = ({ onFinish, form }) => {
  return (
    <Card
      style={{
        backgroundColor: "blueviolet",
        textAlign: "center",
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
        style={{
          textAlign: "center",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        <Form.Item
          name="task"
          rules={[{ required: true, message: "Please enter a task!" }]}
        >
          <Input placeholder="Add a new task..." />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "black",
              marginTop: "15px",
            }}
            block
          >
            Create Task
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default TodoForm;