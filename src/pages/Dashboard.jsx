import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const posts = ['Dummy post']
  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard-container">
          {
            posts.map(post => {
              return <article key={post.id} className='dashboard-post'>
                <div className="dashboard-post-info">
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard-post-actions">
                  <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
                  <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
                </div>
              </article>
            })
          }
        </div> : <h2 className="center">You have no posts yet.</h2>
      }
    </section>
  )
}

export default Dashboard