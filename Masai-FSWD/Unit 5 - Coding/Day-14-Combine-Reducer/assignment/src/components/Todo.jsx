import { Input, Button } from "antd";
import { addTodo } from "../redux/todo/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { List, Typography, Divider } from "antd";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const data = useSelector((store) => store.todos.todos);
  console.log("data", data);

  const handleTodo = () => {
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "40%",
          position: "relative",
          left: "35%",
          marginTop: "50px",
        }}
      >
        <Input
          placeholder="Enter todo"
          type="text"
          id="todo"
          name="todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button type="primary" onClick={() => handleTodo()}>
          Add Todo
        </Button>
      </div>

      <div>
        <List
          size="small"
          style={{
            width: "40%",
            position: "relative",
            left: "35%",
          }}
          header={
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Todo List
            </div>
          }
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item.title}</List.Item>}
        />
      </div>
    </div>
  );
};
