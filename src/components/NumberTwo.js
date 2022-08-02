import { Component } from "react";
import {connect} from 'react-redux';


class NumberTwo extends Component{
    render(){
        return(
            <div>
                {this.props.numb}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        numb : state.globalNumber
    }
}

export default connect(mapStateToProps) (NumberTwo);