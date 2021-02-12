import {useEffect,useState} from 'react'
export interface TestProps {
    
}
 
const Test: React.FunctionComponent<any> = ({posts}) => {
    
    useEffect(() => {
        console.log('posts : ',posts)
        posts.forEach(element => {
            console.log('element : ',element)  
        })
    }, [posts]);
    return ( 
        <div>
            {
                posts.map(p=>(
                    <h1>{p.id}</h1>
                ))
            }
        </div> 
    );
}
 
export default Test;



type Post = {
  author: string
  content: string
}

export const getStaticProps = async () => {
  const res = await fetch('http://139.59.159.33/wp-json/wp/v2/news?_embed')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}