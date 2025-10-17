import './App.css';
import Title from './Title';
import ProductTab from './ProductTab';
import MsgBox from './MsgBox';

function App() {
  return(
    <>
      <MsgBox userName={"Shreyash"} textColor={"red"}/>
      <Title/>
      <ProductTab/>
    </>
  )
}

export default App
