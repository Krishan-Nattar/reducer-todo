import React, {useReducer, useEffect} from 'react';
import {Segment} from 'semantic-ui-react';
import './App.css';
import {initialState, todoReducer} from './reducers/todoReducer';
import Todo from './components/Todo';
import Form from './components/Form';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  // console.log(state);
  return (
    
    <div className="App">
      <Segment stacked className="segment">
      What do I need to do...?
      <Form dispatch={dispatch}/>
      <Todo data={state} dispatch={dispatch} />
      </Segment>
    </div>
    
  );
}

export default App;
