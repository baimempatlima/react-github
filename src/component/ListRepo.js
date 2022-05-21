import React from "react";

export const ListRepo = ({ data, repositories }) => {
  return (
    <div>
      <div className="container">
        <table className="table table-bordered border-primary table table-sm">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Avatar</th>
              <th scope="col">Location</th>
              <th scope="col">Github URL</th>
              <th scope="col">Repositories</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{!data.avatar_url ? "" : <img style={{ width: "200px", height: "200px", marginTop:"5px" }} src={data.avatar_url} alt={data.avatar_url} />}</td>
              <td>{data.location}</td>
              <td>
                <a rel="noreferrer" href={data.url} target="_blank">
                  {data.url}
                </a>
              </td>
              <td style={{ textAlign: "left" }}>
                {repositories.map((repo) => (
                  <div>
                    <ul className="list-group list-group-flush" key={repo.name}>
                      <li className="list-group-item">
                        <i className="fab fa-github"></i>
                        <a rel="noreferrer" href={repo.name} target="_blank" style={{ marginLeft: "5px" }}>
                          {repo.name}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRepo;
