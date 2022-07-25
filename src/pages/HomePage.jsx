import ArticleList from "../components/ArticleList"
import ArticleTeaser from "../components/ArticleTeaser"
import {FormControl, InputGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect} from 'react'


function HomePage ({articles}){
    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults]= useState([])

    const handleChange = (event) => {
        const value = event.target.value
        console.log(`${value} value changed`)

        setSearchTitle(value)
    }

    useEffect( () => {
        const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
        setResults(filteredArticles)
    },[searchTitle])
    return (
        <div>
            <Form>
                <Form.Control 
                type="search" 
                placeholder="Search" 
                onChange={(event) =>{handleChange(event)}}
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            {results
            ? results.map((article) => (
                <ArticleTeaser key ={article.id} {...article} />
            ))
            : ''
            }
            <hr/>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage