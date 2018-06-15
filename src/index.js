import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
class Card extends Component {
    render () {
        console.log(this.props.children)
        return (
            <div className='card'>
                <div className='card-head'>
                    {this.props.children[0]}
                </div>
                <div className='card-content'>
                    {this.props.children[1]}
                </div>
                <div className='card-foot'>
                    {this.props.children[2]}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Card>
        <div className='card-head'>
            card-head
        </div>
        <div className='card-content'>
            card-content
        </div>
        <div className='card-foot'>
            card-foot
        </div>
    </Card>,
    document.getElementById('root')
)
registerServiceWorker();
