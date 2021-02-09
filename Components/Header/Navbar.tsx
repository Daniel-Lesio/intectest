import {useEffect,useState} from 'react' 
import Link from 'next/link'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {useRouter} from 'next/router'



const Navbar = ({inview}) => {
    const [Active,setActive] = useState('About')
    const router = useRouter()
    useEffect(() => {
        if(router.pathname === '/'){
            setActive("Home")
        }
        else{

            setActive(router.pathname.substring(1))
        }
    }, []);
    return (
        <NavbarComp 
        animate={{ height : inview ? 70 : 128 }}
        transition={{ type: "spring", stiffness: 100 }}
        >
            <div className='container'>
                <Nav>
                <Link href="/Home">
                <a>
                <Image 
                src='/assets/logo_INTEC_color.svg' alt=""
                height='45'
                width='158'
                />
                </a>
                </Link>
                <Ul>
                <UlLink >
                    <Link href='/'>
                        <a 
                        style={{color : Active === 'Home' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'Home' ? 900 : 400  }} 
                        >Home</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/News'>
                        <a
                         style={{color : Active === 'News' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'News' ? 900 : 400  }} 
                        >News</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/About'>
                        <a
                        style={{color : Active === 'About' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'About' ? 900 : 400  }} 
                        >About Us</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/References'>
                        <a
                         style={{color : Active === 'References' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'References' ? 900 : 400  }} 
                        >References</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/Cases'>
                        <a
                        style={{color : Active === 'Cases' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'Cases' ? 900 : 400  }} 
                        
                        >Case Study</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/Services'>
                        <a
                        style={{color : Active === 'Services' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'Services' ? 900 : 400  }} 
                        >Services</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/Career'>
                        <a
                        style={{color : Active === 'Career' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'Career' ? 900 : 400  }} 
                        >Career</a>
                    </Link>
                </UlLink>
                <UlLink>
                    <Link href='/Contact'>
                        <a
                        style={{color : Active === 'Contact' ? '#EB7700' : '#1D1D1B', fontWeight : Active === 'Contact' ? 900 : 400  }} 
                        >Contact</a>
                    </Link>
                </UlLink>
                </Ul>
                </Nav>
            </div>
        </NavbarComp>
    );
}

export default Navbar;
const Nav = styled.nav`
    z-index : 10;
    height: 70px;
    display : flex;
    align-items : center;
    justify-content : space-between;        
`
const Ul = styled.ul`

display:none;
@media (min-width : 1024px) {
    display :flex;
}
width : 769px;
justify-content: space-between;
align-items: center;
position: relative;
font-size: 14px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0px;
text-align: left;
height : 100%;


&::after{
    position: absolute;
    width: 100%;
    height: 1px;
    transform: translateX(-50%);
    left: 50%;
    top: 0px;
    background: #E7E7E7;
    content: '';
    transition: all ease-in-out .3s;
}
`
const UlLink = styled.li`
    height : 100%;
    font-size: 14px;
    text-transform : uppercase;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    position : relative;
    cursor: pointer;
    display : flex;
    justify-content : center ; 
    align-items : center;
    position : relative;     
    transition : all ease-in-out .3s;
        &::after{
            z-index : 1;
            transition : all ease-in-out .3s;
            position: absolute;
            width: 0%;
            height: 1px;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 3px;
            background: #EB7700;
            content: '';          
        }
        &:hover{
            font-weight :  900;
            color : #EB7700;
            &::after{
            transition : all ease-in-out .3s;
            position: absolute;
            width: 110%;
            height: 1px;
            font-weight :  900;
            transform: translateX(-50%);
            left: 50%;
            top: 0px;
            background: #EB7700;
            content: '';          
        }   
        }
;
   
`
const NavbarComp = styled(motion.div)`
    height : 128px;
    background : white;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.14);
    display : flex;
    justify-content : center;
    align-items : center;
`
