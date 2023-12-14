import { IHelloWorld } from "../interfaces"

export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text">This is test text: {text}</div>
}
