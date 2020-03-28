import React, { useState, useEffect } from 'react';
import axios from 'axios'

export const ArticlesRes = () => {
    const [allArticles, addArticles] = useState([{}])
    useEffect(() => {

        const fetchArticles = async () => {
            const response = await axios.get('/blog')
            addArticles(response.data)
        }
        fetchArticles()

    }, [])

    return (
        <div>
            {allArticles.map((article, index) => {
                return (
                    <ul key={index}>
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                    </ul>
                )
            })

            }
        </div>
    )
}
