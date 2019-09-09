import React, { useReducer } from "react";
// import { dispatch } from "rxjs/internal/observable/pairs";
import {Segment} from 'semantic-ui-react';
// import Moment from 'react-moment';


const Todo = props => {

  const handleClickItem = e =>{
    e.preventDefault();
    props.dispatch({type: 'clickitem', payload: e.target.dataset.id})
}

  return (
    <Segment.Group raised>
      {props.data.map(item => {
        return <Segment className={item.completed ? "disabled" : null}  key={item.id}><h1 data-id={item.id}  onClick={(e)=>handleClickItem(e)}>{item.item}</h1></Segment>
      })}
    </Segment.Group>
  );
};

export default Todo;


// 