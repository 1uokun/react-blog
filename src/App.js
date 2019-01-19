import React, { Component } from 'react';
import { Dispatcher, Injector } from './flux';
// import PropTypes from 'prop-types'

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

function counterStore(counter = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return counter + 1;
        case DECREMENT_COUNTER:
            return counter - 10;
        default:
            return counter;
    }
}

function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

function decrement() {
    return {
        type: DECREMENT_COUNTER
    };
}

export default class CounterApp extends Component{
    render() {
        return (
            <Dispatcher
                // Instead of specifying an object of keys mapped to stores, just use a
                // higher-order store!
                store={(state = {}, action) => ({
                    counter: counterStore(state.counter, action)
                })}
            >
                {() => (
                    <Injector actions={{ increment, decrement }}>
                        {({ actions, atom }) => {
                            console.log(actions, atom);
                            return (
                                <Counter
                                    increment={actions.increment}
                                    decrement={actions.decrement}
                                    // counter={atom.counter}
                                />
                            )
                        }}
                    </Injector>
                )}
            </Dispatcher>
        );
    }
}

class Counter extends Component{
    render() {
        const { increment, decrement, counter } = this.props;

        return (
            <p>
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
            </p>
        );
    }
}
