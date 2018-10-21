import * as React from 'react'

//可选属性
interface Interface {
    required: string,
    unrequired?: string
}

//只读属性
interface readObj {
    readonly name : string,
    readonly age? : number
}

let myObj:readObj = {name:'Niko'};

//Parameter 'obj' implicitly has an 'any' type
function func(obj:readObj){
    console.log(obj.name)
}

func(myObj)


export default class extends React.Component<Interface> {
    constructor(props:any){
        super(props);
        this.state = {
            num:{}
        }
    }
    public render(){
        return (
            <div>
                <p>{this.props.required}</p>
                <p>{this.props.unrequired||'非必需参数'}</p>
                <p>{myObj.name}</p>
            </div>
        )
    }
}