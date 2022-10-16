/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from './Button'

const PostCard = ({ post }) => {
  return (
    <Post>
      <img src={post.featuredImage.url} alt={post.title} />
      <div className="post-info">
        <div className="event-ttl">{post.title}</div>
        <div className="event-dt">{`${new Date(
          post.date
        ).toDateString()}, ${new Date(post.date).toLocaleTimeString()}`}</div>
        <div className="event-txt">{post.excerpt}</div>
      </div>
    </Post>
  )
}

export default PostCard

const Post = styled.div`
  max-width: 1024px;
  margin: 3rem auto 2rem;

  img {
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    line-height: 1.4;
  }

  .event-ttl {
    font-size: 1.8rem;
    font-weight: 700;
    font-style: italic;
    color: #e74c3c;
    text-transform: uppercase;
  }

  .event-dt {
    font-size: 0.9rem;
    font-weight: 900;
    // font-style: italic;
    text-transform: uppercase;
  }

  .event-txt {
    font-size: 1rem;
    margin: 0.5rem 0;
    line-height: 1.4;
  }
`
