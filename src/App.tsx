import { AlertTriangle, Ban, BellRing, CheckCheck, Info } from "lucide-react"
import Alert from "./components/UI/Alert/Alert"

function App() {

  return (
    <>
      <Alert type="alert-danger" 
      icon={<Ban size={20}/>} 
      title="Something Went Wrong"
      children={
      <>
          Lorem ipsum dolor sit <a href="">amet consectetur</a>  adipisicing elit. Sed veniam earum similique debitis praesentium dignissimos pariatur libero molestiae cum magnam iusto iste, labore dolor sint officia deserunt, cumque omnis! Aspernatur.
      </>}
      />
      <Alert type="alert-default" 
      icon={<BellRing size={20}/>} 
      title="default alert"
            children={
      <>
          Lorem ipsum dolor sit <a href="">amet consectetur</a>  adipisicing elit. Sed veniam earum similique debitis praesentium dignissimos pariatur libero molestiae cum magnam iusto iste, labore dolor sint officia deserunt, cumque omnis! Aspernatur.
      </>}
      />

      <Alert type="alert-success" 
      icon={<CheckCheck size={20}/>} 
      title="success alert"
            children={
      <>
          Lorem ipsum dolor sit <a href="">amet consectetur</a>  adipisicing elit. Sed veniam earum similique debitis praesentium dignissimos pariatur libero molestiae cum magnam iusto iste, labore dolor sint officia deserunt, cumque omnis! Aspernatur.
      </>}
      />

      <Alert type="alert-warning" 
      icon={<AlertTriangle size={20}/>} 
      title="warning alert"
            children={
      <>
          Lorem ipsum dolor sit <a href="">amet consectetur</a>  adipisicing elit. Sed veniam earum similique debitis praesentium dignissimos pariatur libero molestiae cum magnam iusto iste, labore dolor sint officia deserunt, cumque omnis! Aspernatur.
      </>}
      />

      <Alert type="alert-info" 
      icon={<Info size={20}/>} 
      title="info alert"
            children={
      <>
          Lorem ipsum dolor sit <a href="">amet consectetur</a>  adipisicing elit. Sed veniam earum similique debitis praesentium dignissimos pariatur libero molestiae cum magnam iusto iste, labore dolor sint officia deserunt, cumque omnis! Aspernatur.
      </>}
      />
    </>
  )
}

export default App
