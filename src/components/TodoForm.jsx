import { Input, Button, Card, Form } from 'antd';

const TodoForm = ({onFinish, form}) => {

  return (
    <Card className="flex justify-center align-center" style={{backgroundColor: "blueviolet"}}>
      <Form form={form} onFinish={onFinish} style={{textAlign: 'center', marginLeft: "200px", marginRight: "200px" }}>
        <Form.Item name="task">
          <Input style={{marginBottom: '15px',}}
          placeholder="Add a new task..."/>
        </Form.Item>
        
        <Form.Item>
        <Button type="primary" htmlType="submit" style={{backgroundColor: "black"}} >
        Create Task
          </Button>
          </Form.Item>
      </Form>
    </Card>      
  );
};

export default TodoForm;
