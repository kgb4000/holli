/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from './Button'

const PostCard = ({ post }) => {
  return (
    <Post>
      <img src={post.featuredImage.url} alt={post.title} />
      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </Post>
  )
}

export default PostCard

const Post = styled.div`
  img {
    margin-bottom: 2rem;
  }
`
