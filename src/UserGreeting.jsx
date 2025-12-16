// Condition rendering

function UserGreeting(props){
    const welcomemessage = <h2 className="welcome-message">
                           welcome {props.username}
                           </h2>

    const loginprompt = <h2 className="login-prompt">
                        Please login to continue
                        </h2>
    return(props.isLoggedIn ? welcomemessage : loginprompt );


}


export default UserGreeting