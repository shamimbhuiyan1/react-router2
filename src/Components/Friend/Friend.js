import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const showFriendDetail = () => {
    // const path = `/friend/${id}`;
    // navigate(path);
    // or nicher ta dibo
    navigate("/friend/" + id);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h2>Name:{name} </h2>
      <Link to={"/friend/" + id}>Show Detail</Link>
      <button onClick={showFriendDetail}>
        {username} Id:{id}
      </button>
    </div>
  );
};

export default Friend;
