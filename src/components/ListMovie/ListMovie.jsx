import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";
import tmdbApi, { category } from "~/api/tmdbApi";

import "./ListMovie.scss";
import MovieCard from "../MovieCard/MovieCard";

const ListMovie = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="movie-list" data-aos="fade-up">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ListMovie.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ListMovie;
