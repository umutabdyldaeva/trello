import { useSelector } from "react-redux";
import List from "./List";
import styled from "styled-components";
import TodoList from "./TodoList";

const TextList = (props) => {
  const {todo} = useSelector((state) => state.todo)
    return (
       <Div>
        {todo.map((elem) => {
            console.log(elem);
            return(
                <Container>
                    <Text>{elem.title}</Text>
                    <TodoList toDos={elem.toDos}/>
                    <List todo={elem}/>
                </Container>
            )
        })}
       </Div>
    )
}

const Div=styled.div`
display: flex;
`
const Container=styled.div`
    display: flex;
    flex-direction: column;
    background-color:  #cfcfcade;
    border-radius: 5px;
    margin-left: 20px;    
`
const Text=styled.p`
    text-align: center;
`



export default TextList;