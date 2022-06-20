import { useSelector, useDispatch } from "react-redux";
import { todosAction } from "../../store/slice/Slice";
import styled from "styled-components";

const Todos = () => {
const dispatch = useDispatch()
const todo = useSelector((state) => state.cart)

const addTodos= () => {
   dispatch(todosAction.toggle2())
}

   return (
      <Btn onClick={addTodos}>+ Добавить колонку</Btn>
   )
}

const Btn = styled.button`
    width: 280px;
    height: 40px;
    background-color: #ffffff68;
    border: none;
    border-radius: 5px;
    color: blue;
    
`

export default Todos;