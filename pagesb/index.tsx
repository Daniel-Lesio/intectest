import { GetStaticProps } from 'next'
import { useEffect } from 'react'
// import Head from 'next/head'
import Layout from '../Layout/Layout'
import Hero from '../Components/Hero/Hero'
import Numbers from '../Components/Numbers/Numbers'
// import NewsComp from '../Components/NewsComp/NewsComp'
import SwipeCases from '../Components/SwipeCases/SwipeCases'
import AboutComp from '../Components/AboutComp/AboutComp'
import ServicesComp from '../Components/ServicesComp/ServicesComp'
import Certificates from '../Components/Certificates/Certificates'
import TestimonialsComp from '../Components/TestimonialsComp/TestimonialsComp'
import SwipeNews from '../Components/SwipeNews/SwipeNews'
import { useWindowWidth} from '@react-hook/window-size'

export default function Home({HeroData,posts,testimonials}) {
  const onlyWidth = useWindowWidth()
  useEffect(()=>{
    // window.scrollTo(0,0)
  },[])
  return (
    <Layout className=''>
      <Hero heroData={HeroData} />
      { (onlyWidth > 1024) &&
        <Numbers/>
      }
      <SwipeNews data={posts}/>
      <AboutComp/> 
       {/* <CasesComp/> */}
      <SwipeCases/>
      <ServicesComp/>
      <TestimonialsComp data={testimonials}/>
      <Certificates/>
    </Layout>
  )
}


interface HeroObj  {
  line1: string,

  line2: string,
  backgroundUrl? : string,
}
interface TestimonialType  {
  id : Number,
  testimonial : string,
  author : string,
}
export const getStaticProps : GetStaticProps = async (context) => {
 const fs = require('fs')
const path = require('path')
  const HeroData : HeroObj = {
    line1 : "Your general contractor",
    line2 : 'of PV solar farm',
    backgroundUrl : "/assets/_banner@2x.jpg"
  } 
  const data = await fs.readFileSync( path.join(process.cwd(),'/data/posts.json'),'utf-8')
  // let posts = await JSON.parse(data)
  const linksJson = await fs.readFileSync( path.join(process.cwd(),'/data/posts.json'),'utf-8')
  let links = await JSON.parse(linksJson)
  const testimonialsData = await fs.readFileSync( path.join(process.cwd(),'/data/testimonials.json'),'utf-8')
  let testimonials: TestimonialType[] = await JSON.parse(testimonialsData)
  const res = await fetch('http://139.59.159.33/wp-json/wp/v2/news?_embed')
  const posts = await res.json()
 
  
  return {
    props: {
      HeroData,
      posts,
      links,
      testimonials
    },
  }
}