import { useEffect, useState } from "react";

const UE1 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setData(users));
    }, []);

  return (
    <>
      {data.map((user) => (
        <div key={user.id}>
          <h3>ID: {user.id}</h3>
          <h3>Name: {user.name}</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  );
};

export default UE1;

