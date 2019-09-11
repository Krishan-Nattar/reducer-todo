import React, { useState } from "react";
import {Input, Button, Icon, Form} from 'semantic-ui-react';

const FormTodo = props => {
  const [listItem, setListItem] = useState("");

  const handleAdd = e => {
    e.preventDefault();
    if (listItem != "") {
      props.dispatch({ type: "add", payload: listItem });
      setListItem("");
    }
  };
  const handleClear = e => {
    e.preventDefault();
    props.dispatch({ type: "clear" });
  };

  return (
    <div>
      <Form>

        <Input
          value={listItem}
          onChange={event => setListItem(event.target.value)}
        />
        <Button onClick={e => handleAdd(e)}><Icon name='add' />Add Item</Button>
        <Button icon onClick={e => {handleClear(e)}}>
        <Icon name='delete' />Clear Finished
      </Button>
      </Form>
      
    </div>
  );
};

export default FormTodo;
