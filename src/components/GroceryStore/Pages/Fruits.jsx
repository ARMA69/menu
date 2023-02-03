import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useState } from "react";
import fruits from "../data/fruits";

const SORT_KEYS = ["title"];

function sortFruits(fruits, key) {
  const sortedFtuits = [...fruits];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedFtuits;
  }
  sortedFtuits.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedFtuits;
}

const Fruits = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);

  const [sortedFruits, setSortedFruits] = useState(sortFruits(fruits, sortKey));

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedFruits([...fruits]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1 className="title-gs">{sortKey ? `Fruits sorted by ${sortKey}` : "Fruits"}</h1>
      {sortedFruits.map((fruit) => (
        <div key={fruit.slug}>
          <Link to={fruit.slug} className="fruitsLink">
            {fruit.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Fruits;
