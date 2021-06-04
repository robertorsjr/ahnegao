import React, { useEffect, useState } from 'react';
import { Container, Text, Wrapper, Row } from './styles';
import { Adverts, Footer, Header, PostContent, Separator } from '../../components'
import { getPosts } from '../../services/posts'

function HomePage() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await getPosts()
      console.log(data)
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <Container >
      <Header />
      <Separator y={136} />
      <Wrapper>
        <Row>
          <Row direction='column'>
            {posts && posts.map(post => <PostContent key={post.id} item={post} />)}
            <Text>Vai Filhão!</Text>
          </Row>
          <Adverts />
        </Row>
      </Wrapper>
      <Footer />
      <Separator y={28} />
    </Container>
  );
}

export default HomePage;