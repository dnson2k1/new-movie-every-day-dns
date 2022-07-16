import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { category as cate } from "~/api/tmdbApi";
import MovieGrid from "~/components/MovieGrid/MovieGrid";
import PageHeader from "~/components/PageHeader/PageHeader";

const Catalog = () => {
  const { category } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeader>
        <div data-aos="fade-up">
          {category === cate.movie ? "Movie" : "TV Series"}
        </div>
      </PageHeader>
      <div className="container mb-3">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
