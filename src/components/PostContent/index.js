import React from 'react';
import dayjs from 'dayjs'
import { Container, Line, Title, Date, HtmlContent } from './styles';
import PostFooter from '../PostFooter';

function PostContent({ item }) {
  console.log(item)
  return (
    <Container>
      <Title href={item?.link}>{item.title.rendered}</Title>
      <Date>{dayjs(item.date).format('DD/MM/YYYY')}</Date>
      <Line />
      <HtmlContent dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
      <Line />
      <PostFooter postId={item.id} authorId={item.author} />
    </Container>
  );
}

export default PostContent;