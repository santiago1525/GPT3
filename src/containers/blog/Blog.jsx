import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import Article from '../../components/article/Article'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Están sucediendo muchas cosas, <br /> Estamos blogueando al respecto.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrl={blog01} date='Sep 26, 2023' title='GPT-3 y Open AI son el futuro. Vamos a explorar cómo es?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
        <Article imageUrl={blog02} date='Sep 26, 2023' title='GPT-3 y Open AI son el futuro. Vamos a explorar cómo es?'/>
        <Article imageUrl={blog03} date='Sep 26, 2023' title='GPT-3 y Open AI son el futuro. Vamos a explorar cómo es?'/>
        <Article imageUrl={blog04} date='Sep 26, 2023' title='GPT-3 y Open AI son el futuro. Vamos a explorar cómo es?'/>
        <Article imageUrl={blog05} date='Sep 26, 2023' title='GPT-3 y Open AI son el futuro. Vamos a explorar cómo es?'/>

        </div>
      </div>
    </div>
  )
}

export default Blog