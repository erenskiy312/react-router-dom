import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);
  return (
    <div>
      <h1>Users Page</h1>
      {users.map((user) => (
        <Link to={`/users/${user.id}`}>
          <li>{user.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
