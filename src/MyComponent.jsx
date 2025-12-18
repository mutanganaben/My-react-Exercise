// React Hook(useState)
// OnChange = ex: input,textarea,select,radio
 
import { useState } from "react"


function MyComponent(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [names, setNames] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    const updateName = () => {
        setName("Spongebob");
    }
    const updateAge = () => {
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    function handleNameChange (event){
        setNames(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)

    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>
            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
            <br />
            <br />
            <input type={names} onChange={handleNameChange}  />
            <p>Name: {names}</p>
            <br />

            <input type={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>
            <br />

            <textarea value={comment} onChange={handleCommentChange}
            placeholder="enter delivery comments">

            </textarea>
            <p>Comment: {comment}</p> <br />
            
            <select value={payment} onChange={handlePaymentChange} >
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
                 
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange} />
                Pick Up
            </label><br />
            <label >
                <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>




        </div>
        
    );


}

export default MyComponent