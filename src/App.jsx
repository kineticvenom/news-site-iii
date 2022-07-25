import { useState } from 'react'

import './App.css'


import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SectionPage from './pages/SectionPage'
import NewsData from './data/news.json'
import AppNav from './components/AppNav'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  // const[navItems, setNavItems] = useState(NavItemsData)
  const[articles, setArticles] = useState(NewsData.map(( article, index) => {
    return {
      id: index,
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      image: article.multimedia.length ? article.multimedia[0] : null,
      created_date: article.created_date,
      section: article.section
    }})
    )

  const getArticleById = (articleId) => {
    return articles[articleId]
  }
  
  return (
    <div className="App">
      {/* <NavBar items={navItems} /> */}
      <AppNav />
      <Router> 
        <Routes>

          <Route path='/' element={<HomePage articles = {articles}/>} />
          <Route path='/articles/:articleID' element={<ArticlePage  getArticleById={getArticleById} />} />
          <Route path='/sections/:sectionName' element={<SectionPage articles={articles}/>}/>

        </Routes>
      </Router>   
  
    </div>
  )
}

export default App