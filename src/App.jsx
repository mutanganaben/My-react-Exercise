import Header from "./assets/Header"
import Footer from "./assets/Footer";
import List from "./List";
import Card from "./assets/Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import MyComponent from "./MyComponent";
import Count from "./Count";
import ColorPicker from "./ColorPicker";
import Objects from "./Objects";
import List1 from "./List1";


function App() {

  return (
    <>
    <UserGreeting isLoggedIn={true} username="Ben" />
    <br />
    <Header />
    <br />
    <Card />
    <br />
    <List />
    <br />
    <Student name="ben" age={20} isStudent={true} /> <br />
    <Button /> <br />

    <MyComponent /> <br />
    <Count /> <br />
    <Objects/><br />
    <List1 />
    <ColorPicker/>

    <Footer />
    </>

  );





}

export default App
