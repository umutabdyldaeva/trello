import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const Login = () => {
return (
       <div>
        <GlobalStyle/>
      <Link to='/form'><Div><Btn >Log In</Btn></Div></Link> 
       </div>
    )
}

const GlobalStyle = createGlobalStyle`
    body{
    background-image: url("https://cdn.mos.cms.futurecdn.net/WtYmvxWyfa9qXUnNj67zp3.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    }
`
const Btn = styled.button`
 width: 120px;
 height: 30px;
 background-color: white;
 border: none;
 box-shadow: 1px 2px 3px 1px gray;
 border-radius: 5px;
 color: blue;
    
`
const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 4px;
`
 
export default Login;
