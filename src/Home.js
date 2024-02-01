import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = (/*{post , fetchError ,isLoading}*/) => {
  const {searchResult , fetchError ,isLoading} = useContext(DataContext)
  return (
    <main className="Home">
           {isLoading && <p className="statusMsg">Loading posts...</p>}
            {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResult.length ? <Feed searchResult={searchResult} /> : <p className="statusMsg">No posts to display.</p>)}
        </main>
  )
}

export default Home