// Rendering lists


function List(){
    const fruits = ["Pineapple", "coconut", "orange", "banana", "apple"];
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return(
        <ol>
            {listItems}
        </ol>
    )
}
 export default List