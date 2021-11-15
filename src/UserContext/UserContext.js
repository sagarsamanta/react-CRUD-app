// import { useButtonProps } from "@restart/ui/esm/Button";
import React, { useState } from "react";
import './UserContext.css'
export const Mycontext = React.createContext();
const UserContext = (props) => {
  const [users, setUser] = useState(
   [ 
    {
      id: 1,
      name: "sagar",
      position: "mamager",
      salary: 2000,
    },
    {
      id: 2,
      name: "Rohit",
      position: "Employee",
      salary: 1000,
    }
   ]);
   
  return (
    <div className="user_container">
      <Mycontext.Provider value={[users, setUser]}>
        {props.children}
      </Mycontext.Provider>
    </div>
  );
};

export default UserContext;
