import { Card } from './components/Card'
import Widget from './components/Widget'
import './App.css'
import myImage from './images/444.webp';

function App() {
const firstCardInfo = {
  title: "Card Title",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa labore vero nam illum! Optio, fugiat, maxime animi ut ipsum id consequuntur, dolore amet numquam quam corrupti blanditiis aut aperiam.",
  };

  const secondCardInfo = {
    title: "Card Title",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa labore vero nam illum! Optio, fugiat, maxime animi ut ipsum id consequuntur, dolore amet numquam quam corrupti blanditiis aut aperiam.",
    src: myImage
  };

  return ( 
      <Widget>
        <Card {...firstCardInfo}/>
        <Card {...secondCardInfo}/>
      </Widget>

  )
}

export default App
