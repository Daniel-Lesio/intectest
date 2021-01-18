import {useState} from "react"
import {motion} from 'framer-motion'
function Twitter(props) {
  const [hovered ,setHovered ] = useState(false)
  const colorChanger = () => hovered ? '#EB7700' : '#fff'


  return (
    <motion.svg
    style={{borderRadius : '50%' ,position : "relative" , background : 'white' , overflow : "hidden"}}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
      initial={{rotate : 0}}
      animate={{
        y : hovered ? 10 : 0
      }}
    >
      {
         <circle style={{zIndex : -1}} cx="12" cy="12" r="9" fill={ hovered ? "#EB7700" : "#fff"}/>
      }
      <path
        d="M12 19.2a7.2 7.2 0 100-14.4 7.2 7.2 0 000 14.4zm0 1.8a9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9 9 9 0 01-9 9z"
        fill={ hovered ? "#2c2c2c" : "#EB7700"}
      />
      {/* <circle cx={12} cy={12} r={9} fill="#fff" /> */}
      <path
        d="M17 9.829c-.331.14-.687.236-1.06.278.381-.219.673-.565.812-.977a3.81 3.81 0 01-1.174.428 1.856 1.856 0 00-.614-.414A1.9 1.9 0 0014.23 9c-1.02 0-1.846.792-1.846 1.768 0 .138.016.272.047.402a5.388 5.388 0 01-2.102-.533 5.247 5.247 0 01-1.703-1.313c-.164.268-.25.575-.25.888 0 .612.327 1.155.822 1.47a1.91 1.91 0 01-.837-.22v.021c.003.411.152.808.422 1.124.27.316.644.531 1.06.609a1.95 1.95 0 01-.835.03c.12.353.352.661.66.881.31.22.681.34 1.064.346a3.81 3.81 0 01-2.293.756c-.148 0-.295-.009-.44-.024.846.52 1.828.796 2.83.795 3.396 0 5.253-2.693 5.253-5.03l-.006-.229c.362-.247.674-.556.923-.912z"
        fill={ hovered ? "#fff" : "#EB7700"}
      />
    </motion.svg>
  )
}

export default Twitter
