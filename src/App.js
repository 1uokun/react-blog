import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// //高阶组件(是一个函数)
// function ajaxWithData(WrapperComponent,url){
//     class NewComponent extends Component {
//         constructor () {
//             super()
//             this.state = { _url: null }
//         }
//
//         componentDidMount(){
//             this.method()
//         }
//
//         //公用逻辑
//         method(){
//             this.setState({_url:url})
//         }
//         render(){
//             return (
//                 <WrapperComponent url={this.state._url}/>
//             )
//         }
//     }
//     return NewComponent
// }
//
// class App extends Component {
//   render() {
//     return (
//       <div>{this.props.url}</div>
//     );
//   }
// }
//
// const newApp = ajaxWithData(App,"github")
//
// export default newApp;

//第二种写法：Post = loadAndRefresh('/post')(Post)
