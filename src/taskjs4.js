import React, { Component } from 'react';
import axios from 'axios';

export class Task4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) =>
        this.setState({
          users: res.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { users } = this.state;

    const tableStyle = {
      border: '1px solid black',
    };

    return (
      <div>
        <h1>Datafetch</h1>
        <table style={tableStyle}>
          <thead>
            <tr style={tableStyle}>
              <th style={tableStyle}>ID</th>
              <th style={tableStyle}>Name</th>
              <th style={tableStyle}>Email</th>
              <th style={tableStyle}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={tableStyle}>{user.id}</td>
                <td style={tableStyle}>{user.name}</td>
                <td style={tableStyle}>{user.email}</td>
                <td style={tableStyle}>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Task4;