class Card extends Component {
    render () {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Card
        one={<One/>}
        two={<Two/>}
    />,
    document.getElementById('root')
)
