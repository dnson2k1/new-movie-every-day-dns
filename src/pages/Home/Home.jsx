import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { category, movieType, tvType } from "~/api/tmdbApi";
import { ButtonOutline } from "~/components/Button/Button";
import HeroSlide from "~/components/HeroSlide/HeroSlide";
import ListMovie from "~/components/ListMovie/ListMovie";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <ListMovie category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <ListMovie category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <ListMovie category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/movie">
              <ButtonOutline className="small">View more</ButtonOutline>
            </Link>
          </div>
          <ListMovie category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
