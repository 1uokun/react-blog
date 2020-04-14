import React from 'react'
import {Consumer} from './context'

export const connect = (WrappedComponent) => {
    return class extends React.PureComponent {
        render(){
            return (
                <Consumer>
                    {value=>{
                        return <WrappedComponent {...value}/>
                    }}
                </Consumer>

            )
        }
    }
};
