import React, { Component } from "react";

class StateFull extends Component {
  constructor() {
    super();
    this.state = {
      formValue: "",
      addText: [],
    };
  }
  textHandler(e) {
    let v = e.target.value;
    this.setState((state, props) => ({
      formValue: v,
    }));
  }
  addHandler() {
    this.setState((state, props) => ({
      addText: [state.formValue, ...this.state.addText],
      formValue:''
    }));
  }

  render() {
    return (
      <>
        {this.state.count}
        <br />
        <br />

        <input type="text" onChange={(e) => this.textHandler(e)}  value={this.state.formValue}/>
        <button onClick={() => this.addHandler()}>Add</button>
         {this.state.addText.map((elelment,index)=>(
           <h1 key={index}>{elelment}</h1>
        ))}
      </>
    );
  }
}

export default StateFull;
