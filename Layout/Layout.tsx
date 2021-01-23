import React from 'react'
import Header from '../Components/Header/Header' 
import SocialsComp from '../Components/SocialsComp/SocialsComp' 
import ContactComp from '../Components/ContactComp/ContactComp' 
import FooterComp from '../Components/FooterComp/FooterComp'
import Notify from '../Components/Notify/Notify'
import {RecoilRoot} from 'recoil'
const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {
    return ( 
        <div style={{overflowX : 'hidden'}}>
            <Header/>
            {children}
            <SocialsComp/>
            <ContactComp/>
            <FooterComp/>
            
        </div>
     );
}
 
export default Layout;

export interface LayoutProps {
    className? : string    
}