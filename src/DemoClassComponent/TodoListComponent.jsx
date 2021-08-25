import { Component } from "react";

class TodoListComponent extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state={
                textField:null,
                array1:[]
            }
        }
    }
    handleChange=(event)=>{
        this.setState({textField:event.target.value});
    }
    clickFunction=()=>{
        this.state.array1.push(this.state.textField);
        this.setState({array1:[...this.state.array1]});
        console.log("Array1",this.state.array1);
    }
    // componentDidMount=()=>{
    //     this.state.array1.map((item)=>console.log("Hello",item))
    // }
    render(){
        return(
            <div>
                <input type="text" placeholder="Add Item" onChange={(event)=>this.handleChange(event)}/>
                <button onClick={this.clickFunction}>Add</button> 
                <div >
                    {this.state?.array1?.map((item)=>{
                        return(
                            <li>
                                {item}
                            </li>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default TodoListComponent;