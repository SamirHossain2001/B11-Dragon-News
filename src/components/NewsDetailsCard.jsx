import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div>
      <img
        src={news.image_url}
        className="w-full h-[350px] object-cover"
        alt=""
      />
      <h1 className="text-xl font-bold my-3">{news.title}</h1>
      <p className="text-primary">{news.details}</p>
      <Link
        to={`/category/${news.category_id}`}
        className="btn btn-secondary my-5">
        Go to home
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
