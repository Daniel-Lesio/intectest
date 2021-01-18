import {atom} from 'recoil'
const notificationAtom = atom({
    key: 'notificationAtom', // unique ID (with respect to other atoms/selectors)
    default: {
        text : '',
        active : false
    }, // default value (aka initial value)
  });
const activeLink = atom({
    key: 'activeLink', // unique ID (with respect to other atoms/selectors)
    default: 'Home'// default value (aka initial value)
  });

  export { notificationAtom ,activeLink}