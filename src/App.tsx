import { Button } from './components/Button'

const App = () => {
  return (
    <div className="App">
      <p>
        Components
      </p>
      <Button >Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="text">Text</Button>
    </div>
  )
}

export default App
