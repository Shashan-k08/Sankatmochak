import React, { useState } from 'react';

function Earthmore() {
  const [inputFields, setInputFields] = useState([]);
  const [content, setcontent] = useState({name: "",age: "",class: ""})

  const handleAddFields = () => {
    setInputFields([...inputFields ,{name:"ddf",age:"",class:""}]);
  };

  const handleInputChange = (index, event) => {
     const values = [...inputFields];
     setcontent({...content,[event.target.name]:[event.target.value]});
  //  values[index].name = event.target.value;
  //  values[index].class = event.target.value;
  //  values[index].age = event.target.value;
  values[index]=content;

    setInputFields(values);
  };

  const  handleInputChange1=(event,index)=> {
    handleInputChange(event,index);
    handleinputvalue(event,index);
  }
  const handleinputvalue=(event)=>{
    setcontent({...content,[event.target.name]:[event.target.value]});
   // handleInputChange(event,index)
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log('Input fields:',inputFields );
    console.log(content)
  };

  return (
    <form  className="et fl-c">
      {inputFields.map((inputField, index) => (
        
        <div key={index} className="fl-r">
          <h6>Enter your name</h6>
          <input type="text" name="name" value={content.name} onChange={handleinputvalue} />
          <input type="text" name="age" value={content.age} onChange={handleinputvalue} />
          <input type="text" name="class" value={content.class} onChange ={handleinputvalue} />
        </div>
      ))}
      <button type="button" onClick={handleAddFields}>Add Input Field</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Earthmore;
