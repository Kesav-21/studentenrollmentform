import { useState } from "react";
const Forms=(props)=>{
    return(
      <div>
        <form onSubmit={props.sub}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
          <label htmlFor="name">Email</label>
          <input type="email" name="name"/>
          <label htmlFor="name">Website</label>
          <input type="text" name="name"/>
          <label htmlFor="name">Image Link</label>
          <input type="text" name="name"/>
          <label htmlFor="gender">Gender</label>
          <input type="radio" id="male" name="gender" value="male"/>
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label htmlFor="female">Female</label>
          <label htmlFor="skills">Skills</label>
          <input type="checkbox" id="skill1"  value="java"  name="skill"/>
          <label htmlFor="skill1">Java</label>
          <input type="checkbox" id="skill2" value="html"  name="skill"/>
          <label htmlFor="skill2">HTML</label>
          <input type="checkbox" id="skill3" value="css" name="skill"/>
          <label htmlFor="skill3">CSS</label>
          <input type="submit" value="Enroll"/>
          <input type="button" value="Clear"/>
        </form>
      </div>
    )
  }
  
  export default Forms;