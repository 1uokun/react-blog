import React from 'react'
import Add from './components/Add'
import Cut from './components/Cut'
import Num from './components/Num'

export default class extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Num />
                <Add/>
                <Cut />
            </React.Fragment>
        )
    }
}