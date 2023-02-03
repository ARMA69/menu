import React from "react";
import fruits from "./fruits";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleFruit = () => {
  const params = useParams();
  const fruit = fruits.find((fruit) => fruit.slug === params.slug);
  return (
    <>
      <h1>Single Fruit Info</h1>
      <h2>{fruit.title}</h2>
      <h3>{fruit.slug}</h3>
      <Link to=".." relative="path">
        All fruits
      </Link>
    </>
  );
};

export default SingleFruit;
