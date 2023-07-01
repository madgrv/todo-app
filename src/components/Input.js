import React, { useState, useEffect} from 'react';


const Input = () => {
    const [input, setInput] = useState("")

    return(
        <div>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>Add</button>
        </div>

       
    )
}

export default Input