 
import './bir.css';
import React, { useState } from "react";
 
const Sample = () => {
  const [data, setData] = useState([
 
  ]);
 
  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(1);
 
  const onChangeUser = e => setInputUser(e.target.value);
  const onChangeEmail = e => setInputEmail(e.target.value);
 
  const eventClick = () => {
    const Nextdata = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail
    });
 
    setNextId(nextId + 1);
    setData(Nextdata);
    setInputUser("");
    setInputEmail("");
  };
 
  const KeyPress = e => {
    if( e.key === "Enter" ) {
        eventClick();
    }
  }
 

 
  const dataList = data.map((data) => (
    <tr>
    <td key={data.id}>{data.id}</td>
    <td>{data.user}</td>
    <td>{data.email}</td>
    </tr>
  ));
 
  return (
    <div>
      <input type="text" name="user" placeholder="이름" value={inputUser} onChange={onChangeUser} />
 
      <input type="text" name="email" placeholder="이메일" value={inputEmail} onChange={onChangeEmail} onKeyPress={KeyPress}/>
 
      <button onClick={eventClick}>등록</button>
 
      <table>
        <tr>
        <td>번호</td>
        <td>제목</td>
        <td>작성자</td>
        </tr>
        {dataList}
      </table>
    </div>
  );
};
 
export default Sample;