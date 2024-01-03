import {CardComponnent} from "../components/card";
import { Article } from "../types/article"

const sampleData: { articles: Article[] } = {
  articles: [
    {
      source: { id: 'source1', name: 'Source 1' },
      author: 'Author 1',
      title: 'gpt',
      description: 'Description 1',
      url: 'https://chat.openai.com/c/66a32eb2-8652-44ac-9e0d-323a2603b1cc',
      urlToImage: 'https://t4.ftcdn.net/jpg/01/62/42/09/240_F_162420902_nU5hnvuGSCaDy4ja3StuTCYybafONrH0.jpg',
      publishedAt: '2022-01-01T12:00:00Z',
      content: 'Content 1',
    },
    {
      source: { id: 'source2', name: 'Source 2' },
      author: 'Author 2',
      title: 'Title 2',
      description: 'Description 2',
      url: 'https://example.com/article2',
      urlToImage: 'https://example.com/image2.jpg',
      publishedAt: '2022-01-02T14:30:00Z',
      content: 'Content 2',
    },
    {
      source: { id: 'source2', name: 'Source 2' },
      author: 'Author 2',
      title: 'Title 2',
      description: 'Description 2',
      url: 'https://example.com/article2',
      urlToImage: 'https://example.com/image2.jpg',
      publishedAt: '2022-01-02T14:30:00Z',
      content: 'Content 2',
    },
    {
      source: { id: 'source2', name: 'Source 2' },
      author: 'Author 2',
      title: 'Title 2',
      description: 'Description 2',
      url: 'https://example.com/article2',
      urlToImage: 'https://example.com/image2.jpg',
      publishedAt: '2022-01-02T14:30:00Z',
      content: 'Content 2',
    },
    {
      source: { id: 'source2', name: 'Source 2' },
      author: 'Author 2',
      title: 'Title 2',
      description: 'Description 2',
      url: 'https://example.com/article2',
      urlToImage: 'https://example.com/image2.jpg',
      publishedAt: '2022-01-02T14:30:00Z',
      content: 'Content 2',
    },
    // Add more articles as needed
  ],
};

export default function Home () {

  return (
    <div style={{border :"1px solid red", display:"flex",flexWrap:"wrap"}}>
      {sampleData.articles.map((article, index) => (
        <CardComponnent 
          key={index}
          imageSrc={article.urlToImage}
          title={article.title}
          paragraph={article.description} 
          url={article.url}
        />
      ))}
    </div>
  );

};

