import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "~/api/apiConfig";
import tmdbApi from "~/api/tmdbApi";

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);
  return (
    <div className="casts" data-aos="fade-right">
      {casts.map((cast, index) => (
        <div key={index} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`,
            }}
          ></div>
          <div className="casts__item__name">{cast.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CastList;
