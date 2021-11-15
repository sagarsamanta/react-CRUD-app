import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Mycontext } from "../UserContext/UserContext";
import { useParams, Link } from "react-router-dom";
const DeleteUser = () => {
  const params = useParams();
  const [users, setUser] = useContext(Mycontext);
  const deleteUser = () => {
    const newUsers = users.filter((user) => user.id != params.id);
    setUser(newUsers);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure to delete ?</p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/">
            <Button variant="secondary">Cancle</Button>
          </Link>
          <Link to="/">
            <Button onClick={deleteUser} variant="primary">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DeleteUser;
