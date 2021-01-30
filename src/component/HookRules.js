import React,{useState,useEffect} from "react";

export default React.memo(function HookRules(){
    const [name, setName] = useState("");

    if(name !== ""){
        useEffect(()=>{
            console.log("name",name);
        });
    }

    const [age, setAge] = useState(0);
    useEffect(()=>{
        console.log("age",age);
    });

    return (
        <div>
            <ul>
                <li>只能在顶层使用Hook</li>
                <li>不要在循环、条件或嵌套函数中调用Hook</li>
                <li>React依靠Hoo声明的顺序调用</li>
                <li>所以不要将Hook写在条件语句内</li>
            </ul>
            <input type="text" value={name} onChange={({target:{value}})=>setName(value)}/>
        </div>
    );
})
