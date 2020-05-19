import React, { useState } from "react";
import { string } from "prop-types";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };
  const removeUser = () => {
    setUsers(users.filter((el) => el.idUser !== selectedUser.idUser));
  };
  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const sortUsers = (propName) => {
    setUsers((prevUsers) => [
      ...prevUsers.sort((o1, o2) => {
        if (typeof o1[propName] === "string") {
          return o1[propName].localeCompare(o2[propName]);
        }
        return o1[propName] - o2[propName];
      }),
    ]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <button type="button" onClick={addUser} className="btn">
          Dodaj użytkownika
        </button>
        <button type="button" onClick={removeUser} className="btn">
          Usun użytkownika
        </button>
        <Table
          users={users}
          sort={sortUsers}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
        />
      </div>
    </>
  );
}
