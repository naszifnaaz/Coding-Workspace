import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../redux/store";
import { userLogin } from "../redux/auth/action";
import { Navigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  const dispatch = useDispatch();

  if (auth) return <Navigate to={"/todo"} />;

  const handleSubmit = () => {
    console.log(username, password);
    dispatch(userLogin());
    console.log(store.getState());
    setAuth(true);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      style={{
        width: "30%",
        margin: "20px 0",
        padding: "20px",
        textAlign: "center",
        position: "relative",
        left: "30%",
      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        onChange={(e) => setUsername(e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        onChange={(e) => setPassword(e.target.value)}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
