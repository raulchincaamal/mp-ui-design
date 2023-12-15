import { Button } from "./components/Button"
import { Flex } from "./components/Flex"

const App = () => {
  return (
    <Flex rootClassName="App" direction="vertical">
      <p>Components</p>
      <Flex size={8}>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="text">Text</Button>
        <Button type="danger">Danger</Button>
        <Button isDisabled>Disabled</Button>
      </Flex>
    </Flex>
  )
}

export default App
