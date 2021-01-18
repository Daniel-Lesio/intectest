import React , {useState , useEffect} from 'react';
// import { ContainerComp} from '../../styledComponents/StyledComponetns'
import { useInView } from 'react-intersection-observer';
import { motion, animate} from 'framer-motion'
import Image from 'next/image'
const Numbers = () => {
    const [ nr1 , setNr1] = useState(0)
    const [ nr2 , setNr2] = useState(0)
    const [ nr3 , setNr3] = useState(0)
    const [ref,inView ] = useInView({
        threshold : 0
    })
    const [numbers] = useState([
    1150000,
    15,
    681000
    ])
    useEffect(() => {
        if(inView){
             animate( inView ? 0 : numbers[0] , inView ? numbers[0] : 0, {
                duration : 1,
                
                onUpdate(value){
                    let v = value.toFixed()
                    setNr1(v)
                },
                
            })
             animate( inView ? 0 : numbers[1] , inView ? numbers[1] : 0, {
                duration : 1.2,
                
                onUpdate(value){
                    let v = value.toFixed()
                    setNr2(v)
                },
                
            })
             animate( inView ? 0 : numbers[2] , inView ? numbers[2] : 0, {
                duration : 1.4,
                
                onUpdate(value){
                    let v = value.toFixed()
                    setNr3(v)
                },
                
        
            })
            
        }
        
        return () => {
            'cleanup'
        };
    }, [inView , numbers]);
    
  
    return (
        <section id='numbers' style={{zIndex : 20}} className='container bg-orange' >
        <Image
        style={{zIndex : -1}}
        src='/assets/orange-numbers.svg'
        layout='fill'
        />
        <h1>INTEC'S NUMBERS</h1>
      <div className="numbers-grid" data-target='numbers' >
        <div className="numbers numbers-left">
          <motion.h2 ref={ref}
            
          className="number">{nr1}</motion.h2>
          <p>INSTALLED PV MODULES</p>
        </div>
        <div ref={ref} className="numbers numbers-center">
          <h2 className="number" data-number='15'>{nr2}</h2>
          <p>COUNTRIES ACTIVE</p>
        </div>
        <div className="numbers numbers-right">
          <h2 className="number" data-number='681000'>{nr3}</h2>
          <p>MWH ANNUAL ENERGY PRODUCTION</p>
        </div>
      </div>            
        </section>
    );
}

export default Numbers;



