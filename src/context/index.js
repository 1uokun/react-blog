import React from 'react'

export const ThemeContext = React.createContext(
    "LIFE"
);

export const Provider = class extends React.Component {
    state={
        num:1
    };

    add_life=()=>{
        this.setState({num:this.state.num+1})
    };

    cut_life=()=>{
        this.setState({num:this.state.num-1})
    };

    render(){
        return (
            <ThemeContext.Provider value={{...this,...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
};
export const Consumer = ThemeContext.Consumer;
