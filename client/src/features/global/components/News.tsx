// import * as React from 'react';
import { useQuery } from '@apollo/client';
import { Article } from '../types/article';
import { GET_NEWS } from '../queries/query';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function News() {
  // Fetch data using the useQuery hook
  const { loading, error, data } = useQuery(GET_NEWS);
  console.log(data);
  

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.getNews.articles.map((article: Article, index: number) => (
        <a
          key={`${article.title}-${index}`}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Card sx={{ maxWidth: 345, maxHeight:255 }} style={{ margin: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={article.urlToImage} // Assuming this is the image URL from your data
                alt={article.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
      ))}
    </div>
  );
}

export default News;
