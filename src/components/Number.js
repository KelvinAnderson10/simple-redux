import { Component } from "react";
import {connect} from 'react-redux';
import ActionType from '../redux/reducer/GlobalActionType';

class Number extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.numb}</h1>
                <button onClick={this.props.handlePlus}>PLUS</button>
                <button onClick={this.props.handleMinus}>MINUS</button>
                <button onClick={this.props.handleMulti}>MULTI</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        numb : state.globalNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus : () => dispatch({type: ActionType.PLUS}),
        handleMinus : () => dispatch({type: ActionType.MINUS}),
        handleMulti : () => dispatch({type: ActionType.MULTI})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Number);