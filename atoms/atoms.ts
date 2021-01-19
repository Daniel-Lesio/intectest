import {atom} from 'recoil'

const notificationAtom = atom({
    key: 'notificationAtom', 
    default: {
        text : '',
        active : false
    }, 
  });
const activeLink = atom({
    key: 'activeLink', 
    default: 'Home'
  });

  export { notificationAtom ,activeLink }