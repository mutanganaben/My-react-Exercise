// React Hook(useState)

import { useState } from "react"


function MyComponent(){
    const [name, setName] = useState();

    const updateName = () => {
        setName("Spongebob");
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>
        </div>
    );


}

export default MyComponent