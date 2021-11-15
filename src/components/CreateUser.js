import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link,Redirect } from "react-router-dom";
import "./CreateUser.css";
import { Mycontext } from "../UserContext/UserContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const CreateUser = () => {
    let history = useHistory();
  const [users, setUser] = useContext(Mycontext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setsalary] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
   setUser([...users,{id:id,name:name,position:position,salary:salary}])
   history.push("/")
  };
  
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleSalary = (e) => {
    setsalary(e.target.value);
  };
  return (
    <div className="user_create_form">
      <div>
        <h1>User Details</h1>
        <hr />
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control required type="text" value={id} onChange={handleId} />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" value={name} onChange={handleName} />
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
          <Form.Control required type="text" value={salary} onChange={handleSalary} />
        </Form.Group>
       
          <Button className="btn_create" variant="primary" type="submit">
            Create
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

export default CreateUser;
