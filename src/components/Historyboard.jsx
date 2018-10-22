import React from 'react';

const Historyboard = (props) => {
  console.log(props.history);
  return <div>
    { 
    Object.keys(props.history).map(keyName =>  {
        {console.log(props.history.getItem(props.history.getItem(keyName))}
      //  return <p>{props.history.getItem(props.history.getItem(keyName))} </p>
   } 
      )
    } 
    
      {/* <p>{props.history.getItem(props.history.key(0))}</p>
      <p>{props.history.getItem(props.history.key(1))}</p>
      <p>{props.history.getItem(props.history.key(2))}</p>
      <p>{props.history.getItem(props.history.key(3))}</p> */}
    </div>;
};

export default Historyboard;