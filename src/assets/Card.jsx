import profilePic from  "./Benjamin.png";


function Card (){
    return(
        <div className="card">
            <img className= "card-image" src={profilePic} alt="Profile picture"></img>
            <h1 className="card-title" >Benjamins code</h1>
            <p className="card-text" >I am a student </p>


        </div>
    );



}

export default Card