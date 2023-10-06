import { useEffect, useState } from 'react';
import Navi from './components/Navi'
import UsersList from './components/UsersList'
import './style/app.scss'
import AddUser from './components/AddUser';
function App() {
  const [users,setUsers]=useState([]);

  const getData=async()=>{
    const response=await fetch("http://localhost:5005/data");
    const result= await response.json();
    setUsers(result);
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div id='app-container'>
     <Navi baslik="Navigate"/>
     <AddUser users={users} setUsers={setUsers}/>
     <UsersList users={users.filter(user=>!user.isDeleted)}/>
     <Navi baslik="Footer"/>
    </div>
  );
}

export default App;
