import './App.css'
import resume from './assets/resume.pdf'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex gap-2">
        <a href="https://github.com/elchukc" target="_blank">
          Github
        </a>
        <a href={resume} target="_blank">
          Resume
        </a>

      </nav>
      <h1>This site is currently under construction</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
