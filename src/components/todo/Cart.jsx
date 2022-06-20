import styled from "styled-components";
import { useDispatch } from "react-redux";
import { todosAction } from "../../store/slice/Slice";
import { useState } from "react";
import { cartAction } from "../../store/slice/cartSlice";

const Cart = () => {
let dispatch = useDispatch()
const [input, setInput] = useState('');

const inputChangeHandler = (event) => {
    setInput({
        ...input,
        id: Math.random().toString(),
        title: event.target.value
    })
}

const addHandler = () => {
    dispatch(cartAction.addtodo(input));
    dispatch(todosAction.toggle2())

}
    
    return ( 
        <Div>
        <input type='text' onChange={inputChangeHandler} value={input.title}/>
        <button onClick={addHandler}>Добавить список</button> 
        <span onClick={()=>dispatch(todosAction.toggle2())}>X</span>
        </Div>
      
    )
}

const Div = styled.div`
    width: 300px;
    height: 100px;
    margin-left: 30px;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #e5e0e0;
    & input {
        width: 280px;
        height: 35px;
        margin-top: 5px;
        margin-left: 8px;
        border-radius: 4px;
        border: none;
    }
    button {
        margin-left: 9px;
        margin-top: 5px;
        width: 150px;
        height: 35px;
        border-radius: 4px;
        border: none;
        background-color: #1973e8;
        color: white;
    }
    span{
        margin-left: 10px;
    }
`

export default Cart;