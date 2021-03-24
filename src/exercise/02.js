// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName

  // LAZY INITIALIZER: inicializador "preguiçoso"
  // Quando o useState recebe uma função em vez de um valor como estado inicial,
  // essta função é executada apenas na fase mount do componente, sem se
  // repetir na fase update
  const [name, setName] = React.useState(() => window.localStorage.getItem('name') || initialName)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  function handleChange(event) {
    setName(event.target.value)
    window.localStorage.setItem('name', name)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <p>localStorage: {window.localStorage.getItem('name')}</p>
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
