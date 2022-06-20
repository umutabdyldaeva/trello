import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/slice/cartSlice";
import styled from "styled-components";

const List = ({todo}) => {

const dispatch = useDispatch()
const [list, setList] = useState(false);
const [listData, setListData] = useState('');

const listDataChangeHandler = (event) => {
    setListData(event.target.value)
}

const submitHandler = (event, id) => {
    event.preventDefault()
    if(listData.length > 0) {
        const data = {
            item: listData,
            id: Math.random().toString()
        }
        dispatch(cartAction.adddata({data, id}))
    }
    setListData('');
}

    return (
        <Div>
        {list ? (
            <div>
                <textarea
                    value={listData}
                    onChange={listDataChangeHandler}
                    placeholder='Вывести заголовок для этой карточки'
                />
                <div>
                    <button className="btn" onClick={(event) => submitHandler(event, todo.id)}>Добавить список</button>
                    <span onClick={() => setList(false)}>X</span>
                    </div>
               </div>
        ) : (
            <button className="cart" id={todo.id} onClick={ () => setList(true)}> + Добавить карточку</button>
        )
        }
        </Div>
    )
 
}

const Div = styled.div`
    width: 280px;
    margin-left: 6px;
    .cart {
       width: 270px;
       height: 30px;
       border-radius: 4px;
       border: none;
       background-color: #faf0f0ef;
       color: blue;
    }
    .btn {
       width: 160px;
       height: 35px;
       border: none;
       border-radius: 4px;
       background-color: #4174ec;
       color: white;
    }
    textarea {
        width: 270px;
        height: 50px;
        border-radius: 5px;
        border: none;
    }
    span{
        margin-left: 10px;
    }
  
`

export default List;

