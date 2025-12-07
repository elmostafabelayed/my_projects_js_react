import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";
export default function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [hhh, sethhh] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUtilisateurs(res.data);
    });
  }, []);
  const [res, setRes] = useState([]);
  useEffect(() => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users%20/2/posts")
      .then((resultat2) => {
        setRes(resultat2.data);
      });
  }, []);
  function find(id) {
    sethhh(res.filter((e) => e.userId === id));
    setUserId(id);
  }
  return (
    <div className="">
      <Users
        hhhhh={find}
        list={hhh}
        userId={userId}
        utilisateurs={utilisateurs}
      />
    </div>
  );
}
