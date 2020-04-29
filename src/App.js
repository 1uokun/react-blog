import React from 'react'
import update from 'immutability-helper';

// const ListOfWords = React.memo(function ListOfWords(props){
//     return <div>{JSON.stringify(props.words)}</div>;
// })

class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

export default class WordAdder extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar'],
            value:1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug
        const words = this.state.words;
        words.push('marklar');
        this.setState({words: [...words,'marklar']});
        this.setState({words: words});
        // this.setState({value: this.state.value + 1});
        // this.setState({value: this.state.value + 1});
        // this.setState({value: this.state.value + 1});
        this.setState((state) => ({ value: state.value + 1}));
        this.setState((state) => ({ value: state.value + 1}));
        this.setState((state) => ({ value: state.value + 1}));
    }

    render() {
        return (
            <div>
                <div>{this.state.words.join(',')}</div>
                {this.state.value}
                <button onClick={this.handleClick} />
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}
