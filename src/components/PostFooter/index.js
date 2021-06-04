import React, { useState, useEffect } from 'react';
import { getAuthorById, getCategoryById, getTagById } from '../../services/getById'
import { Wrapper, Image, Text, Title, Coment, Row } from './styles';

function PostFooter({ postId, authorId }) {
  const [author, setAuthor] = useState();
  const [tag, setTag] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    async function fetchAuthorAndTag() {
      if (postId && authorId) {
        const resp = await getAuthorById(authorId);
        const respo = await getCategoryById(postId);
        const response = await getTagById(postId);
        setAuthor(resp.data)
        setTag(response.data[0])
        setCategory(respo.data[0])
      }
    }
    fetchAuthorAndTag()
  }, [postId, authorId])

  return (
    <Wrapper top={20} space>
      <Wrapper direction='column'>
        <Title size={18} weight={700}>TAGS:<Text href={tag?.link}>{tag?.name}</Text></Title>
        <Row justify='flex-start'>
          <Image img='https://www.ahnegao.com.br/wp-content/themes/ahnegao7/autor/negao-8.jpg' />
          <Wrapper direction='column'>
            <Title bottom>Postado por <Text size={16} href={author?.link}>{author?.name}</Text></Title>
            <Title> em <Text size={16} href={category?.link}>{category?.name}</Text></Title>
          </Wrapper>
        </Row>
      </Wrapper>
      <Row >
        <Coment size={20} style={{ alignSelf: 'flex-end' }}>
          <Coment size={33}>{`20`}</Coment>
          {'Comentários'}
        </Coment>
      </Row>
    </Wrapper>
  );
}

export default PostFooter;