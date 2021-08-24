import { Component } from "react";

export class DemoClassComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:props.prop,
            array1:["Patiala","Lucknow","Patna"]
        }
    }
    componentDidMount()
    {
       console.log("Hi Karan",this.state.value);
       for(var i=0;i<this.state.array1.length;i++)
       {
           console.log("Value is:",this.state.array1[i]);
       }
    }    
    render(){
        return <h1>Hello{this.state.value}</h1>
        
    }
}
