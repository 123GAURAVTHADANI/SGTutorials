import { Component } from "react";

export class DemoClassComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            value:props.prop,
            array1:[]
        }
        // this.addItem=this.addItem.bind(this.)
    }
    componentDidMount()
    {
       console.log("Hi Karan",this.state.value);
       for(var i=0;i<this.state.array1.length;i++)
       {
           console.log("Value is:",this.state.array1[i]);
       }
    }
    handleChange=(event)=>{
        this.setState({value:event.target.value})
    }
    addItem=()=>{
        console.log("Heyy");
        this.state.array1.push(this.state.value);
        console.log("Array",this.state.array1);
        this.setState({array1:[...this.state.array1]})
    }    
    render(){
        return (
    <div>
</div>
        )
        
    }
}
