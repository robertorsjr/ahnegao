import React, { useEffect, useState } from 'react';
import { Container, Text, Wrapper, Row } from './styles';
import { useHistory, useParams } from "react-router-dom";
import { Adverts, Footer, Header, NavigationBar, PostContent, Separator } from '../../components'
import { getPosts } from '../../services/posts'

function HomePage() {
  const [posts, setPosts] = useState()
  const { page = 1 } = useParams();
  const history = useHistory()


  useEffect(() => {
    async function fetchPosts() {
      const { data } = await getPosts(page)
      setPosts(data)
    }
    fetchPosts()
  }, [page])

  const navigate = (num) => {
    history.push(`/pages/${Number(page) + num}`)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container >
      <Header />
      <Separator y={136} />
      <Wrapper>
        <Row>
          <Row direction='column'>
            {posts && posts.map(post => <PostContent key={post.id} item={post} />)}
            <Text>Vai Filhão!</Text>
            <NavigationBar condition={page} handleSwitchPage={navigate} />
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