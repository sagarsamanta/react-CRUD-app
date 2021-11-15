import React from "react";
import { Button, Table } from "react-bootstrap";
import { useContext } from "react";
import { Mycontext } from "../UserContext/UserContext";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [users] = useContext(Mycontext);

  const nodata = "No user";
  return (
    <div>
      <Link to="/create">
        <Button className="btn_createUser" variant="primary">
          Create New User
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length == 0 ? (
            <tr id="no_user_show">{nodata} </tr>
          ) : (
            users.map((user) => (
              <tr key={Math.random()}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.salary}</td>
                <td>
                  <Link to={`/view/${user.id}`}>
                    <Button className="btn_viewUser" variant="success">
                      View
                    </Button>
                  </Link>
                  <Link to={`/edit/${user.id}`}>
                    <Button className="btn_editUser" variant="warning">
                      Edit
                    </Button>
                  </Link>
                  <Link to={`/delete/${user.id}`}>
                    <Button className="btn_deleteUser" variant="danger">
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
