import React from "react";
import { Link } from "react-router-dom"; //Link를 쓰려면 import 해줘야 함

//hooks
//graphQL

const Recipe = ({ title, calories, img, ingrs }) => {
  //console.log(calories);
  const kcal = Math.floor(calories);
  //console.log(kcal);
  return (
    <div>
      {/* <ul>
        {ingrs.map((ingr, i) => (
          <li key={i}>{ingr.text}</li>
        ))}
      </ul> */}

      <div className='imgbox'>
        <img src={img} alt='' />
      </div>
      <h2>
        <Link
          to={{
            pathname: "/RecipeDetail", //참고 : https://rrecoder.tistory.com/101
            state: {
              title: title,
              calories: calories,
              img: img,
              ingrs: ingrs,
            },
          }}>
          {title}
        </Link>
      </h2>
      <p>칼로리 : {kcal} kcal</p>
      <div className='topBtn'></div>
    </div>
  );
};

export default Recipe;
