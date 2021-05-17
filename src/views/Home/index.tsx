import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodosList } from "redux/modules/todos";
import { GetListTodoSelector } from "redux/selectors";
import { ListGroup, ListGroupItem } from "reactstrap";

const HomePage = (props: any) => {
  const dispatch = useDispatch();
  const todoList = GetListTodoSelector();
  const { data: listTodo, loading } = todoList;

  useEffect(() => {
    console.log("ssss");
    dispatch(
      getTodosList({
        onSuccess: (response) => {
          console.log(response);
        },
        onFailed: (error) => {
          console.log(error);
        },
      })
    );
  }, [dispatch]);

  // Render
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      List Todo Example
      <hr />
      <ListGroup>
        {listTodo.map((el: any, idx: any) => (
          <ListGroupItem key={idx}>
            {el.id} - {el.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};
export default HomePage;
