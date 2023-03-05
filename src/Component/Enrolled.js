import React from "react";
import Forms from "./Forms";
class Enrolled extends React.Component{
    constructor(props){
      super(props);
      this.state={
        details:[],
        id:0,
      }
      this.submitHandler=this.submitHandler.bind(this);
    }
    submitHandler(e){
        const name=e.target.elements[0].value;
        const email=e.target.elements[1].value;
        const web=e.target.elements[2].value;
        const imglink=e.target.elements[3].value;
        const gender=e.target.elements.gender.value;
        let skills=e.target.elements.skill;
        const listskill=[];
        for (var skill of skills){
          if(skill.checked){
            console.log(skill.value);
            listskill.push(skill.value);
          }
        }
        const addform=this.state.details.concat({id:this.state.id,name:name,email:email,web:web,imglink:imglink,gender:gender,skills:listskill});
        this.setState({id:this.state.id+1,details:addform});
        e.preventDefault();
    }
    render(){
    return (
        <React.Fragment>
            <Forms sub={this.submitHandler}/>
      <div>
        <h1>Enrolled Students</h1>
        <table>
            <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
          </thead>
          <tbody>
            {this.state.details.map(elem=>{
                return(
                    <tr>
                        <td>
                          {elem.name}<br/>
                          {elem.email}<br/>
                          {elem.web}<br/>
                          {elem.gender}<br/>
                          <ul>{elem.skills.map(ele=>{return(<li>{ele}</li>)})}</ul><br/>
                          </td>
                        <td>{elem.image}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
      </div>
      </React.Fragment>
    )
  }
  }
  
  export default Enrolled;