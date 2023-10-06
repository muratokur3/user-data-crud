import React, { useState } from 'react'
import '../style/add-user.scss'
const AddUser = ({users,setUsers}) => {

  const [isim,setIsim]=useState("");
  const [soyisim,setSoyisim]=useState("");
  const [yas,setYas]=useState("");
  const [cinsiyet,setCinsiyet]=useState("");
  const [email,setEmail]=useState("");

const createUser=(e)=>{
e.preventDefault();
const yeniveri= {
  id: users.length+1,
  ad: isim,
  soyad: soyisim,
  yas: yas,
  cinsiyet: cinsiyet,
  email: email,
  isDeleted: false
}
setUsers(
[...users,yeniveri]
)

setIsim("");
setSoyisim("");
setYas("");
setCinsiyet("");
setEmail("");

}

  return (
    <div id="add-user-container">
      <form onSubmit={createUser}>
        <input value={isim} onChange={e=>setIsim(e.target.value)} placeholder='İsim' type='text' required/>
        <input value={soyisim} onChange={e=>setSoyisim(e.target.value)} placeholder='Soyisim' type='text' required/>
        <input value={yas} onChange={e=>setYas(e.target.value)} placeholder='Yas' type='number' required/>

        <select value={cinsiyet} onChange={e=>setCinsiyet(e.target.value)} required>
          <option value="">Cinsiyet seçiniz</option>
          <option value="Kadın">Kadın</option>
          <option value="Erkek">Erkek</option>
        </select>

        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='E-mail' type='email' required/>
        <input type='submit' value="Add User"/>
      </form>
      </div>
  )
}

export default AddUser