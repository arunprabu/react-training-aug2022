import './App.css';
import About from './components/About/About';
import Company from './components/Company/Company';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Unit Testing</h1>

      <hr />
      <About />

      <hr />
      <Company name='Cognizant Tech'/>

      <hr/>
      <Users />
      
    </div>
  );
}

export default App;
