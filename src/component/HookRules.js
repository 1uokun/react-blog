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
            <input type="text" value={name} onChange={({target:{value}})=>setName(value)}/>
        </div>
    );
})
