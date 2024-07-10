import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserProfile from './UserProfile.jsx'
import MoviesList from './Movie.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProfile />
    <MoviesList />
  </React.StrictMode>,
)
