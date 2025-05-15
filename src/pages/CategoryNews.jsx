import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData(); // all data
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (parseInt(id) === 0) {
      // all news
      setCategoryNews(data);
    } else if (parseInt(id) === 1) {
      // today news
      const filterNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filterNews);
    } else {
      // filter by category id
      const filterNews = data.filter(
        (news) => news.category_id === parseInt(id)
      );
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  //   console.log(id, data);
  return (
    <div>
      <h2 className="font-semibold mb-5">
        Total <span className="text-secondary"> {categoryNews.length}</span>{" "}
        news found.
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
