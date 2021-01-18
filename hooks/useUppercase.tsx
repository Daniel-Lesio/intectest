import {useEffect,useState} from 'react'

const useUppercase = (text : string) => {
    // const [txt, setTxt] = useState('')
    const [utxt , setTxt] = useState('')     
    const [t,sett] = useState(0)
    useEffect(()=>{
        
        return ()=>{
            ()=>setTxt('')
        }   
},[utxt])
    
    const changeTxt =(t) =>{
        setTxt(t.toUpperCase())
    }

    return {utxt,changeTxt}
}

export default useUppercase;
