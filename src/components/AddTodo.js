import TodoItem from "./TodoItem";
import { useState } from "react";
function AddTodo() {
  const [state, setState] = useState("");
  const [todoItems,setTodoItems]=useState([])
  const addTodoItem=()=>{
    var newItem={
        title:state,
        status:true
    }
    setTodoItems([...todoItems,newItem])
  }
  const handleToggle=(index)=>{
    var newArray=todoItems.map((item,i)=>{
        return index===i ? {...item,status:!item.status} :item

    })
    setTodoItems(newArray)

  }
const deleteItem=(index)=>{
    var filterData=todoItems.filter((item,i)=>{
        return index !=i;
    })
    setTodoItems(filterData);

}



  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Todo exemple</h2>
      <input
        value={state}
        type="text"
        placeholder="Enter text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={addTodoItem}> Add item</button>
      <TodoItem todoitem={todoItems} deleteItem={deleteItem} handleToggle={handleToggle} />
    </div>
  );
}
export default AddTodo;