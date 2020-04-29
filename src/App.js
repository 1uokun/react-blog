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
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug
        const words = this.state.words;
        words.push('marklar');
        this.setState({words: words});
        this.refs.list.forceUpdate()
        this.forceUpdate(()=>{console.log(arguments)})
        // this.setState({words: [...words,'marklar']});
    }

    render() {
        return (
            <div>
                <div>{this.state.words.join(',')}</div>;
                <button onClick={this.handleClick} />
                <ListOfWords words={this.state.words} ref={"list"}/>
            </div>
        );
    }
}
