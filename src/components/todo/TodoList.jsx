import styled from "styled-components";


const TodoList = (props) => {
   return (
         <div>
         {props.toDos.map((elem) =><Div>{elem.text}</Div>)}
         </div>
       
    )
}

const Div = styled.div`
background-color: white;
width: 275px; 
height: 40px;
text-align: center;
margin: 5px;
border-radius: 5px;
`


export default TodoList;