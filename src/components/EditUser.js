import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EditUser.css";
import { Mycontext } from "../UserContext/UserContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const params = useParams();

  let history = useHistory();
  const [users, setUser] = useContext(Mycontext);
  const user = users.filter((user) => user.id == params.id);
  // const [id, setId] = useState(user[0].id);
  const [name, setName] = useState(user[0].name);
  const [position, setPosition] = useState(user[0].position);
  const [salary, setsalary] = useState(user[0].salary);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser([...users]);
    history.push("/");
  };

  // const handleId = (e) => {
  //   setId(e.target.value);
  //   const edited_id = id;
  //   user[0].id = edited_id;
  // };
  const handleName = (e) => {
    const ename=e.target.value
    setName(ename);
   
    const edited_name = e.target.value;
    user[0].name = edited_name;
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
    const edited_position = e.target.value;
    user[0].position = edited_position;
  };
  const handleSalary = (e) => {
    setsalary(e.target.value);
    const edited_salary = e.target.value;
    user[0].salary = edited_salary;
    
  };
  return (
    <div className="edit_form">
      <div>
        <h1>User Details</h1>
        <hr />
      </div>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            onChange={handleName}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Position</Form.Label>
          <Form.Control
            required
            type="text"
            value={position}
            onChange={handlePosition}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            required
            type="number"
            value={salary}
            onChange={handleSalary}
          />
        </Form.Group>

        <Button className="btn_create" variant="primary" type="submit">
          save
        </Button>
        <Link to="/">
          <Button className="btn_cancle" variant="danger" type="submit">
            Cancle
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default EditUser;
