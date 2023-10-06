import React from 'react'
import '../style/users-list.scss'

const UsersList = ({users}) => {
  return (
    <div id='user-list-container'>
      {users.map(
        (user)=>
        <div className='user-card' key={user.id}>
          <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"/>
          <h3>{user.ad}{user.soyad}</h3>
          <p>{user.yas}</p>
          <p>{user.cinsiyet}</p>
          <p>{user.email}</p>
        </div>
      )}
      </div>
  )
}

export default UsersList