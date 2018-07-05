import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <hr />
                <button onClick={() => this.props.onAddResult(this.props.cntr)}>Result</button>
                <ul>
                    {this.props.res.map(res => {
                        console.log(res);
                        return (
                            <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
                        )    
                    })}
                    {/* <li onClick={this.props.onDeleteResult}>{this.props.res}</li> */}
                </ul>
            </div>
        );
    }
}

const mapStateTOProps = state => {
    return {
        cntr: state.counterR.counter,
        res: state.resultR.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: "DECREMENT"}),
        onAddCounter: () => dispatch({type: "ADD", val: 5}),
        onSubstractCounter: () => dispatch({type: "SUBSCTRACT", val: 5}),
        onAddResult: (result) => dispatch({type: "ADD_RESULT", result: result}),
        onDeleteResult: (id) => dispatch({type: "DELETE_RESULT", filteredId: id})
    }
}

export default connect(
    mapStateTOProps,
    mapDispatchToProps
)(Counter);