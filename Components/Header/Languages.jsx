import React , {useState} from 'react';

const Languages = () => {
    const [activeLang ] = useState(0) 
    const [languages] = useState([
        {
            name : 'polish'
        },
        {
            name : 'english'
        }
    ])
    return (
        <div>
                {languages[activeLang].name}
        </div>
    );
}

export default Languages;
