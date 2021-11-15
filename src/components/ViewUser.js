import React from "react";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Mycontext } from "../UserContext/UserContext";
import { useParams } from "react-router-dom";
const ViewUser = () => {
  const [users] = useContext(Mycontext);
  const params = useParams();
  const user = users.filter((user) => user.id ==params.id);
  console.log(user);
  return (
    <div>
      <Modal.Dialog>
      
        <Modal.Header  >
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Name : {user[0].name}</p>
          <p>Position : {user[0].position}</p>
          <p>Salary : {user[0].salary}</p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/" >
            <Button variant="secondary">Close</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ViewUser;
