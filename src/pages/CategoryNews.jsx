import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData(); // all data
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (parseInt(id) === 0) {
      // all news
      setCategoryNews(data);
      return;
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
      <h1>Category News {categoryNews.length}</h1>
    </div>
  );
};

export default CategoryNews;
