// import './App.css';
import Welcome from './Component/Welcome';
import Comment from './Component/Comment';
import {Clock , Clock2} from './Component/Clock';
import Toggle from './Component/Toggle';
import List from './Component/List';
import Sidebar from './Component/Sidebar';
import NameForm from './Component/NameForm';
import Greeting from './Component/Greeting';
import Calculator from './Component/Calculator';
import Form from './Component/Form';
import Home from './Component/Home';
import Blog from './Component/Blog';
import Navbar from './Component/Navbar';
import TodoList from './Component/TodoList';
import ListExa from './Component/ListExa';
import ExampleTodo from './Component/ExampleTodo';

const comment = {
  date: new Date(),
  text: 'Hey Gyus i hope you are good and enjoy to learning react tutorial',
  author: {
    name: 'Hello Everyone',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

const numbers = ['Banana', 'Apple', 'Kiwi', 'Orange', 'Papaya'];

const posts = [
  {id: 1, title: 'React Tutorial', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from Node js package npm.'}
];


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <TodoList /> */}
      {/* <ListExa /> */}
      <ExampleTodo />
      {/* <Welcome name='Kitty' />
      <br />
      <hr />
      <Comment date={comment.date}
        text={comment.text} author={comment.author} />
        <br /><br />
        <hr />
        <Clock />
        <hr />
        <Clock2 />
        <Toggle />
        <hr />
        <br />
        <List numbers={numbers} />
        <hr />
        <br /> */}
        {/* <br /> */}
        {/* <NameForm />
        <br />
        <hr /> */}
        {/* <Calculator />
        <br />
        <hr /> */}
        {/* <Greeting isLoggedIn={true}/>
        <Greeting isLoggedIn={false}/> */}
        {/* <br />
        <hr /> */}
        {/* <Sidebar /> */}
        {/* <Home /> */}
       
        {/* <br /> */}
        {/* <Blog posts={posts} /> */}
        {/* <Form /> */}
    </div>
  );
}


export default App;
