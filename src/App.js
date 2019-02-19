import React,{useState} from 'react'

function App (){
    const firstName = useFormChange('Niko');
    const secondName = useFormChange('Bellic');
    return (
        <div>
            <label>{firstName.value}</label>
            <input type="text"
                   value={firstName.value}
                   onChange={firstName.onChange}
            />
            <br/>
            <label>{secondName.value}</label>
            <input type="text"
                   value={secondName.value}
                   onChange={secondName.onChange}
            />
        </div>
    )
}

function useFormChange(initialValue){
    const [value,setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value)
    }

    return {
        value,
        onChange:handleChange
    }
}

export default App;
