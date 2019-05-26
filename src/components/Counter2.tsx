import * as React from 'react'
interface Props{
  name:string
}
interface State{
  number:number,
  amount:number
}
/**
 * 类和接口的区别
 * 1. 类代表一种类型，里面会有方法和属性。接口代表一种规范，里面不能有实现
 */
export default class Counter extends React.Component<Props,State> {
  state = {number:0,amount:1}
  handleClick = ()=>{
    this.setState({number:this.state.number+this.state.amount});
  }
  handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    let val:string = event.target.value;
    this.setState({amount:parseInt(val)});
  }
  render() {
    let {name}  = this.props;
    let {number,amount} = this.state;
    return (
      <div>
        <p>{name}:{number}</p>
        <input value={amount} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
