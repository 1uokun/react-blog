import React, { Component } from 'react';

export default function dispatch(store, atom, action) {
    return store(atom, action);
}

export class Dispatcher extends Component {

    getChildContext() {
        return {
            atom: this.state.atom,
            dispatch: this.dispatch.bind(this)
        };
    }

    constructor(props) {
        super(props);

        this.state = { atom: dispatch(props.store, undefined, {}) };
    }

    dispatch(payload) {
        this.setState(prevState => ({
            atom: dispatch(this.props.store, prevState.atom, payload)
        }));
    }

    render() {
        return typeof this.props.children === 'function'
            ? this.props.children(this.state.atom)
            : this.props.children;
    }
}

export class Injector extends Component {
    performAction(actionCreator, ...args) {
        const { dispatch } = this.context;
        const payload = actionCreator(...args);

        return typeof payload === 'function'
            ? payload(dispatch)
            : dispatch(payload);
    };

    render() {
        const { dispatch, atom } = this.context;
        const { actions: _actions } = this.props;

        const actions = Object.keys(_actions).reduce((result, key) => {
            result[key] = this.performAction.bind(this, _actions[key]);
            return result;
        }, {});

        return this.props.children({ actions, atom });
    }
}
