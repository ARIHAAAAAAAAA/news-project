import React from "react";
import { Card, CardProps, Paragraph, Title, Image, ImageLink } from "../stayle/cardStyle";



export const CardComponnent: React.FC<CardProps> = (props) => {
  return (
    <ImageLink href={props.url}>
      <Card >
        <Image src={props.imageSrc} />
        <Title>{props.title}</Title>
        <Paragraph padding={""}>{props.paragraph}</Paragraph>
      </Card>
    </ImageLink>
  );
};
