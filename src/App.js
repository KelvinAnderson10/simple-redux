import logo from './logo.svg';
import './App.css';
import ActionType from './redux/reducer/GlobalActionType';
import {connect} from 'react-redux';
import { Component } from 'react';
import Number from './components/Number';
import NumberTwo from './components/NumberTwo';

class App extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Hello</h1>
        <h1>{this.props.numb}</h1>
        <button onClick={this.props.handlePlus}>PLUS</button>
        <button onClick={this.props.handleMinus}>MINUS</button>
        <button onClick={this.props.handleMulti}>MULTI</button>
        <Number></Number>
        <NumberTwo></NumberTwo>
      </div>
    );
  }
}

// Mengirim status 
const mapStateToProps = (state) => {
  return {
    numb: state.globalNumber
  }
}

// Mengirim action
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus : () => dispatch({type: ActionType.PLUS}),
    handleMinus : () => dispatch({type: ActionType.MINUS}),
    handleMulti : () => dispatch({type: ActionType.MULTI})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
