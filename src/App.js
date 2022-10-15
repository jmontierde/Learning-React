import './App.css';
// import Greet from './Components/Greet';
// import Welcome from './Components/Welcome'
// import Test from './Components/Test';
// import Message from './Components/Message';
// import CounterApp from './Components/Counter';
// import FunctionClick from './Components/FunctionClick';
// import ClassClick from './Components/ClassClick';
// import EventBind from './EventBind';
import ParentComponents from './Components/ParentComponents';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Josh" hero="Batman">
        <div> 
          <p>This is children props</p>
          <p>Hello</p>
        </div>
      </Greet> */}
      {/* <Greet name="Ken" hero="Superman">
        <button>Submit</button>
      </Greet>
      <Greet name="Kyle" hero="Hulk"/> */}
      
      {/* <Welcome name="Josh" hero="Batman">
      </Welcome> */}
      {/* <Welcome name="Ken" hero="Superman"/>
      <Welcome name="Kyle" hero="Hulk"/> */}
{/*       
      <Message>
      </Message>

      <CounterApp/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponents/>
    </div>
  );
}

export default App;
