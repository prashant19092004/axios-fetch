import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([]);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => getData, []);
  return (
    <div>
      {
        users.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default App