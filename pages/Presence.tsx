import {useState} from 'react';
import styled from 'styled-components';
import Button from '../Layout/Button';
import {motion , AnimatePresence} from 'framer-motion'
import { useUppercase } from '../hooks/myhooks';


const Presence = () => {
const {utxt,changeTxt} = useUppercase('')
    const [text,changeText]=useState('')
    const [menuOpen,setMenuStatus] = useState(false)
    const handleClick = ()=>{
        setMenuStatus(!menuOpen)
    }
    return (
        <div style={{background : '#2c2c2c',minHeight : '100vh' , paddingBottom :100,overflow : 'hidden' , display : 'flex',justifyContent : 'space-between',alignItems : 'center',flexDirection : 'column'}}>
            <div style={{color : 'white',textAlign : 'left',marginTop : 100}} className="t">
                <h1>TXT : {utxt}</h1>
                <input type="text" onChange={(e)=>changeTxt(e.target.value)}/>
            </div>
            <AnimatePresence>
            {menuOpen && (
                <Menu
                animate={{ x : 0 , opacity : 1 }}
                initial={{x : 300,opacity : 0}}
                exit={{x : 300 , opacity : 0 }}
                />   
            )}
            </AnimatePresence>
            <Header>
                <h1>My App</h1>
                <NavButton onClick={handleClick}></NavButton>                  
            </Header>
            <ContentComp placeholder={text} onChange={(e)=>changeText(e.target.value)}>
                
            </ContentComp>
                <Button2>Click Me</Button2>
            <h1>TEXT : {text}</h1>           
        </div>
    );
}

export default Presence;
const Header = styled.div`
    top : 0px;
    position : fixed;
    height : 70px;
    width : 100%;
    line-height : 70px;
    background: rgb(13,85,13);
    background: linear-gradient(90deg, rgba(13,85,13,1) 0%, rgba(13,85,13,1) 23%, rgba(37,124,37,1) 50%, rgba(33,156,33,1) 100%);
    h1{
        line-height : 70px;
        color : #c2bdbd;
    }
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 10px;
`;

const NavButton = styled.div`
  width : 50px;
  height : 50px;
  background : #c2bdbd;
  border-radius : 50%;
`;
const ContentComp = styled.textarea`
  margin-top : 160px;
  width : 90%;
  padding : 10px;
  margin-left : auto;
  margin-right : auto;
  border : solid 2px #c2bdbd;
  border-radius : 5px;
  min-height : 300px;
`;

const Button2  = styled.button`
  padding : 10px 20px;
  background : #c2bdbd;
  border-radius : 5px;
  text-transform : uppercase;
  letter-spacing : 2px;
  cursor : pointer;
  &:hover{
    background :#2c2c2c;
    color : #c2bdbd;
  }
`;
const Menu = styled(motion.div)`
  position : fixed;
  right : 0px;
  top : 70px;
  height : calc(100vh - 70px);
  width : 300px;
  background : #c2bdbd;
`;