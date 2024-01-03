import styled from "styled-components"

const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  justify-content: center;
  color: black;
  margin-bottom: 8px;
  color: #333;
`;

const Image = styled.img`
  border-radius: 10px; 
  width:100%;
  height: 150px;
  object-fit: cover;
`;
const ImageLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Paragraph = styled.p<{padding?:string}>`
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #666;
  padding: ${(props)=> props.padding = "100px" };
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 345px;
  margin: 10px;
  border: 1px solid #ddd; 
  border-radius: 10px;
  width:300px;
  height:250px ;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

export interface CardProps {
  url: string | undefined;
  title: string;
  imageSrc:string;
  paragraph: string;
}

export {Card, Paragraph, Image, Title,ImageLink}