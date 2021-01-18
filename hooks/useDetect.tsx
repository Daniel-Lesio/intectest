
import {useEffect, useRef, useState} from 'react'
const useDetect = () => {
    const [inView,setInView] = useState(false)
    const elem = useRef()
    
    
    return { ref, inView, entry }
  
}

export default useDetect;
