import React, { useState } from "react";
import ListRepo from "./ListRepo";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profile) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };

  return (
    <div>
      <div style={{ padding: "40px" }} className="container">
        <div className="input-group input-group-sm mb-3" style={{ width: "30%", paddingLeft: "12px" }}>
          <input type="text" className="form-control" value={username} placeholder="search username github...." onChange={onChangeHandler} />
          <button type="submit" className="btn btn-outline-primary" onClick={submitHandler}>
            Search <i className="fab fa-github"></i>
          </button>
        </div>
        <ListRepo data={data} repositories={repositories} />
      </div>
    </div>
  );
};

export default Profile;
