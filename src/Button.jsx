

function Button(){
    const handleClick = () => console.log("OUCH");
    const handleClick2 = (name) => console.log('${name}'); 

    return(
        <button onClick={handleClick}>Click me</button>

    );


 
}

export default Button