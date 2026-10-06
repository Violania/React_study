import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Haeder title="Welcome" body="hello web"/>
      <Haeder title="Welcome2" body="hello web2"/>

      <Contents />

      <hr />

      <Web ti='React Hello'></Web>

      <Nav/>
    </div>
  );
}


function Haeder(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.body}
    </div>
  );
}


function Contents() {
  return (
    <div>
      <table border="1">
        <tr>
          <td colSpan="2">테이블</td>
        </tr>
        <tr>
          <td>메뉴1</td>
          <td>메뉴2</td>
        </tr>

      </table>

      
    </div>
  )
}

function Web(props){
  return(
    <header>
    <h1><a href='/'>{props.ti}</a></h1>
    </header>
  )
}

function Nav(){
  return(
    
    <nav>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  </nav>
  )
}

export default App;
