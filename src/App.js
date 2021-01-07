import React ,{ useState } from "react";
import logo from './logo.svg';

import Icon from "./components/icons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

const itemArray = new Array(9).fill("empty")


const App =  () => {

// check if cross or circle(boolean)
const [isCross,setIsCross] = useState(false)
const [winMessage,setWinMessage] = useState("")

const reloadGame = () => {

  // 
  setIsCross(false)
  setWinMessage("")
  itemArray.fill("empty",0,9)

}

const checkIsWinner = () =>{ 

  //  checking  winner of the game
  if (
    itemArray[0] === itemArray[1] &&
    itemArray[0] === itemArray[2] &&
    itemArray[0] !== "empty"
  ) {
    setWinMessage(`${itemArray[0]} won`);
  } else if (
    itemArray[3] !== "empty" &&
    itemArray[3] === itemArray[4] &&
    itemArray[4] === itemArray[5]
  ) {
    setWinMessage(`${itemArray[3]} won`);
  } else if (
    itemArray[6] !== "empty" &&
    itemArray[6] === itemArray[7] &&
    itemArray[7] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[6]} won`);
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[3] &&
    itemArray[3] === itemArray[6]
  ) {
    setWinMessage(`${itemArray[0]} won`);
  } else if (
    itemArray[1] !== "empty" &&
    itemArray[1] === itemArray[4] &&
    itemArray[4] === itemArray[7]
  ) {
    setWinMessage(`${itemArray[1]} won`);
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[5] &&
    itemArray[5] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[2]} won`);
  } else if (
    itemArray[0] !== "empty" &&
    itemArray[0] === itemArray[4] &&
    itemArray[4] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[0]} won`);
  } else if (
    itemArray[2] !== "empty" &&
    itemArray[2] === itemArray[4] &&
    itemArray[4] === itemArray[6]
  ) {
    setWinMessage(`${itemArray[2]} won`);
  }

}

const changeItem = (itemNumber) => {

  // change array item
  if(winMessage) {
    return toast(winMessage, {type: "success"})
  }

  if(itemArray[itemNumber] === "empty") {

    itemArray[itemNumber] = isCross ? "cross" : "circle";
    setIsCross(!isCross)

    checkIsWinner();

  } else {

    return toast("Already filled", {type: "error"})

  }
  
}

  return (
   <Container className="p-5">
     <ToastContainer position = "bottom-center" />
     <Row>
       <Col md={6} className="offset-md-3">
        {/* State Winner Name */}
         {winMessage ? (
           <div className="mb-2 mt-2">
             <h1 className="text-success text-uppercase text-center">
               {winMessage}
             </h1>
             {/* Enable Reset button */}
             <Button color="success" block onClick={reloadGame}>Reload Game</Button>
           </div>
         ) : (
          //  Change users turn message after each of the progress turns
           <h1 className="text-center text-warning">
             {isCross ? "cross" : "Circle"} turns
           </h1>
         )}

         {/* Display tictac-toe grid in the forms of card */}
         <div className="grid">
            {itemArray.map((item, index)=> {
                return(
                  // not calling hangeItem(index) directly as it will call the function directly without clicking
                  <Card onClick={ () => {changeItem(index)}} color="warning">
                    <CardBody className="box">
                      <Icon name={item} />
                    </CardBody>
                  </Card>
                )
            })}
         </div>
       </Col>
     </Row>
   </Container>
  );
}

export default App;
