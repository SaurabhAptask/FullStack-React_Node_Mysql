import React from 'react';

const Table = ({ User }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User_id</th>
          <th>User_name</th>
          <th>User_email</th>
          <th>User_Role_type</th>
          <th>User_status</th>
        </tr>
      </thead>
      <tbody>
        { (User.length > 0) ? User.map( (User, index) => {
           return (
            <tr key={ index }>
              <td>{ User.User_id }</td>
              <td>{ User.User_name }</td>
              <td>{ User.User_email}</td>
              <td>{ User.User_Role_type }</td>
              <td>{ User.User_status }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table;


