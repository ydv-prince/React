import { useState } from "react";
import axios from "axios";

export default function DBInteraction() {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [run, setRun] = useState();
  const [country, setCountry] = useState();

  const getuser = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const adduser = async () => {
    try {
      const req = await axios.post("http://localhost:3000/users", {
        name,
        run,
        country,
      });
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Run"
        onChange={(e) => setRun(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={adduser}>Add User</button>
      <button onClick={getuser}>Get User</button>
      <ul>
        {user &&
          user.map((u) => (
            <li key={u.id}>
              {u.name}
              {u.run}
              {u.country}
            </li>
          ))}
      </ul>
    </>
  );
}