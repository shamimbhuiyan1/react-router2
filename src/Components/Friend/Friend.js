import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  //amra jodi dynamic vabe header kno btn click na kre kothaw jete cai tahole amra navigate use korbo niche naigate maddome amra friend details cole jabo
  const navigate = useNavigate();
  const showFriendDetail = () => {
    // const path = `/friend/${id}`;
    // navigate(path);
    // or nicher ta dibo
    navigate("/friend/" + id);
  };
  return (
    <div>
      <h2>Name:{name} </h2>
      <Link to={"/friend/" + id}>Show Detail</Link>
      <button className="header" onClick={showFriendDetail}>
        {username}
        {id}
      </button>
    </div>
  );
};

export default Friend;
