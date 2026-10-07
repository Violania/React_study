import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let mode = 'WELCOME'
  let [mode, setMode] = useState("WELCOME")
  let [id, setId] = useState(null)

  let content = null

  let m_topics = [
    { id: 1, title: 'html', body: 'my html' },
    { id: 2, title: 'css', body: 'your css' },
    { id: 3, title: 'java script', body: 'our js' }
  ]

  if (mode === 'WELCOME') {
    content = <Article title="Welcome상태" body='STATE WELCOME' />
  } else if (mode === "READ") {

    let title, body
    for (let i = 0; i < m_topics.length; i++) {
      if (m_topics[i].id === id) {
        title = m_topics[i].title
        body = m_topics[i].body
      }
    }

    content = <Article title={title} body={body} />
  }



  return (
    <div>

      <Hearder title='React'
        onChangeMode={() => { setMode('WELCOME') }} />

      <Nav my_topics={m_topics}
        onChangeMode={function (id) { 
          setMode('READ') 
          setId(id)}} />
      {/* onChangeMode={ (id) => { alert('id : ' + id) }} /> */}
      

      <Article title='Welcome' body='hello, web' />

      {content}

    </div>
  );
}


function Hearder(props) {
  return (
    <div>
      <hearder>
        <h1>
          <a href='/' onClick={(event) => {
            event.preventDefault()
            props.onChangeMode()
          }}>
            {props.title}</a>
        </h1>
      </hearder>
    </div>
  )
}


function Nav(props) {

  let lis = []
  for (let i = 0; i < props.my_topics.length; i++) {
    let j = props.my_topics[i]

    lis.push(<li><a id={j.id} href={'/read/' + j.id}
      onClick={function (e) {
        e.preventDefault();
        props.onChangeMode(Number(e.target.id))
      }}>

      {j.title} / {j.body}</a></li>)
  }
  return (
    <div>
      <nav>
        <ul>
          {lis}
        </ul>
      </nav>
    </div>
  )
}

function Article(props) {
  return (
    <div>

      <article>
        <h2>{props.title}</h2>
        {props.body}
      </article>

    </div>
  )
}


export default App;
