import React from 'react'
import {Consumer} from './context'

export const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {

            }
        }

        render(){
            console.log(mapDispatchToProps('asd'))
            return (
                <Consumer>
                    {value=>{
                        return <WrappedComponent {...mapStateToProps(value)}/>
                    }}
                </Consumer>

            )
        }
    }
}