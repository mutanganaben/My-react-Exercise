import Header from "./assets/Header"
import Footer from "./assets/Footer";
import List from "./List";
import Card from "./assets/Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import MyComponent from "./MyComponent";


function App() {

  return (
    <>
    <UserGreeting isLoggedIn={true} username="Ben" />
    <Header />
    <Card />
    <List />
    <Student name="ben" age={20} isStudent={true} />
    <Button />

    <MyComponent />
    <Footer />
    </>

  );





}

export default App
