import Todos from "./Todos";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import TextList from "./TextList";

const Container = styled.div`
  margin: 30px;
  margin-left: 20px;
  display: flex;
 
`;

const ToDo = () => {
  const todos = useSelector((state) => state.cart.todos);
  return (
    <div>
      <Header>
        <nav>
          <h2>Trello</h2>
          <ul>
            <li>Рабочие пространства</li>
            <li>Недавние</li>
            <li>В избранном</li>
            <li>Шаблоны</li>
            <li>Создать</li>
          </ul>
          <Div>
            <input type="text" placeholder="Поиск" />
            <button>Выйти</button>
          </Div>
        </nav>
      </Header>
      <Container>
        <TodoImg />
        <TextList />
        {(todos && <Todos />) || <Cart />}
        
      </Container>
    </div>
  );
};

const TodoImg = createGlobalStyle`
    body{
        background-image: url('https://w-dog.ru/wallpapers/2/98/345022929092352.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
const Header = styled.header`
  width: 100%;
  background-color: #367ee3;
  & h2 {
    color: white;
    margin-left: 30px;
  }
  li {
    list-style: none;
    color: #ffffff;
    display: flex;
    padding: 20px;
  }
  ul {
    display: flex;
  }
  nav {
    display: flex;
    align-items: center;
  }
`;
const Div = styled.div`
  margin-left: 250px;
  & input {
    width: 250px;
    height: 30px;
    border: none;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 5px;
  }
  button {
    height: 33px;
    border-radius: 5px;
    border: none;
    background-color: #ebd7d789;
  }
`;

export default ToDo;
