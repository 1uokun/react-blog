/* useContext实践 */
import React from 'react'

export const MyHookContext = React.createContext(null);

/**
 * class内的实践方式
 *
 *  1. 动态context
 *    创建：createContext
 *    注册：static contextType
 *    获取： this.context
 *
 *
 *  2. 嵌套组件
 *    创建：createContext
 *    注册/获取：<Context.Consumer>{(context)=>{}}</Context.Consumer>
 *
 *
 *
 * function内的实践方式
 *
 *  1. useContext hook
 *    创建：createContext
 *    注册：const context = useContext(Context)
 * **/
