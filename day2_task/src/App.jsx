
import './App.css'

function App() {
  var py="Python_full_stack"
  var java="Java full stack"
  return <div>
    <div>
      <nav className='navbar'>
        <ol>home</ol>
        <ol>contact</ol>
        <ul>about</ul>
        <ul>help</ul>
      </nav>
    </div>
    <div>
      <p>Welcome to 10000 coders </p>
      <ul>{py}</ul>
      <ul>{java}</ul>
    </div>
  </div>
}

export default App
