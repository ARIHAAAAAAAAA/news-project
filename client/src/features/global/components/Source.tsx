import { useQuery } from "@apollo/client";
// import React from "react";
import { GET_NEWS_SOURCE } from "../queries/query";
import { SourceType } from "../types/source";

function Source() {
  const { loading, error, data } = useQuery(GET_NEWS_SOURCE);
  console.log("data", data);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.getNewsSources.sources.map((source: SourceType, index: number) => (
          <li key={`${source.id}-${index}`}>
            <h3>{source.name}</h3>
            <h3>{source.description}</h3>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              <p>{source.url}</p>
            </a>
            <h3>{source.category}</h3>
            <h3>{source.country}</h3>
            <h3>{source.language}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Source;
