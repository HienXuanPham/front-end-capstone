import React from "react";

const UserAccount = ({ userAccount }) => {
  return (
    <div>
      {/**
      <section onClick={() => selectNote}></section>
      <section onClick={() => createNote}></section>
       */}
      {userAccount.email}
    </div>
  );
};

export default UserAccount;
