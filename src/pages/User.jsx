import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../store/slices/authSlice.js";
import Account from "../components/Account.jsx";

function User() {
  const firstName = useSelector((state) => state.auth.user?.firstName);
  const lastName = useSelector((state) => state.auth.user?.lastName);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const usernameFromRedux = useSelector((state) => state.auth.user?.userName);
  const [isEditing, setIsEditing] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");
  const handleSave = () => {
    if (userNameInput.trim() !== "") {
      dispatch(updateUserProfile({ token, userName: userNameInput }));
      setIsEditing(false);
    }
  };
  const handleEditClick = () => {
    setUserNameInput(usernameFromRedux || "");
    setIsEditing(true);
  };
  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <div className="edit-username-form">
            <h1>Edit user info</h1>
            <div className="input-wrapper">
              <label htmlFor="username">User name :</label>
              <input
                type="text"
                value={userNameInput}
                onChange={(e) => setUserNameInput(e.target.value)}
                name="username"
                id="username"
              />
            </div>
            <div className="input-wrapper">
              <label>First Name :</label>
              <input type="text" value={firstName} name="firstname" disabled />
            </div>
            <div className="input-wrapper">
              <label>Last Name :</label>
              <input type="text" value={lastName} name="lastname" disabled />
            </div>
            <div className="edit-buttons">
              <button
                className="edit-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  handleSave();
                }}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1>
              Welcome back
              <br />
              {usernameFromRedux
                ? usernameFromRedux
                : firstName + " " + lastName}
              !
            </h1>

            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
        id="Checking"
      />

      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
        id="Savings"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
        id="CreditCard"
      />
    </main>
  );
}

export default User;
