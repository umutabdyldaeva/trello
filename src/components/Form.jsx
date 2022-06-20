import { useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Wallper from '../assests/Wallper.jpg';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "../store/slice/uiSlice";
import { SpinnerDotted } from "spinners-react";


const Form = () => {
    const {spinner }  = useSelector((state) => state.ui.spinner);
    const dispatch = useDispatch();

    const [enteredEmail, setEnteredEmail] = useState('');
    const [isValidEmail, setIsValidEmail] =useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);

    const emailChangeHandler = (event) => {
         setEnteredEmail(event.target.value)
         setIsValidEmail(event.target.value.includes('@'))
         dispatch(uiAction.data(isValidEmail));
          
    }
    
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setIsValidPassword(event.target.value.length > 4)
        dispatch(uiAction.data(isValidPassword));
      
      };

    let formIsValid = true
    if(isValidEmail && isValidPassword){
          formIsValid = false
    }
    let ref = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(isValidEmail, isValidPassword);
        if(!isValidEmail && !isValidPassword){
            setIsValidEmail(false)
            setIsValidPassword(false)
            return
      }
     
      
        dispatch(uiAction.toggle())
        setTimeout(() => {
            dispatch(uiAction.toggle());
        }, 2000)
        ref.current.click()
    }

    return (
        <div className="dd">
            <div className="ss">
            <LogoTrello src="data:image/jpeg;base64,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"/>
        </div>
        <StyledForm onSubmit={submitHandler}>
           <h5>Вход в Trello</h5> 
           <input type="text" placeholder="Укажите адрес электронной почты" onChange={emailChangeHandler} value={enteredEmail}/>
           <input type="password" placeholder="Введите пароль" onChange={passwordChangeHandler} value={enteredPassword}/>
           <Link ref={ref} to='/todo' ></Link>
            <button type="sybmit">Войти</button> 
            {spinner && <SpinnerDotted/>}
           <p>ИЛИ</p>
           <Div><GoogleText>Войти через Google</GoogleText> <ImageGoogle/></Div>
           <Div><MicText>Войти через Microsoft</MicText> <ImgeMic/></Div>
           <Div><AppleText>Войти через Apple</AppleText><ImgApple/></Div>
           <p>Вход с помощью SSO</p>
           <p>Не удается войти? Зарегистрировать аккаунт</p>
         </StyledForm>
         <FormImg/>
       </div> 
    )
}

const FormImg = createGlobalStyle`
body{
  background-image: url(${Wallper});
  background-repeat: no-repeat;
  background-size: cover;

 .ss{
     width: 200px;
     margin: 30px auto;
  }
}
`
const StyledForm = styled.form`
    margin: auto;
    width: 400px;
    height: 600px;
    margin-top: 40px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h5 {
      font-size: 20px;
      color: gray;
      text-align: center
    }
    input{
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }
    button{
        width: 310px;
        height: 40px;
        font-size: 15px;
        background-color: #63ce63;
        color: white;
        border: none;
    }
`

const LogoTrello = styled.img`
  width: 200px;
`
const Div = styled.div`
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px gray;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`
const ImageGoogle = styled.img.attrs({
    src:`${'https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png'}`
})`
    width: 25px;
    height: 25px;
    margin-right: 15px;
    background-repeat: no-repeat;

`
const GoogleText = styled.p`
width: 150px;
margin-right: 50px; 
color: gray;
`
const ImgeMic = styled.img.attrs({
    src:`${'https://s00.yaplakal.com/pics/pics_original/9/2/8/10863829.png'}`
})`
    width: 70px;
    height: 50px;
    background-repeat: no-repeat;
`
const MicText = styled.p`
    margin-right: 30px;
    color: gray;
`
const ImgApple = styled.img.attrs({
    src: `${'https://w7.pngwing.com/pngs/695/105/png-transparent-apple-logo-business-apple-logo-outline-heart-logo-computer-wallpaper.png'}`
})`
    width: 40px;
    height: 30px;
    background-repeat: no-repeat;
`
const AppleText = styled.p`
    margin-right: 70px;
    color: grey;
`

export default Form;