import './App.css';
import Title from './Title';
import ProductTab from './ProductTab';
import MsgBox from './MsgBox';

function App() {
  return(
    <>
      <Title/>
      <ProductTab/>
      <MsgBox userName={"Shreyash"} textColor={"red"}/>
    </>
  )
}

export default App
