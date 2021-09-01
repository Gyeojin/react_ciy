import React from "react";

const RecipeDetail = (props) => {
  console.log(props);
  const title = props.location.state.title;
  const img = props.location.state.img;
  const ingrs = props.location.state.ingrs;
  //console.log(props.location.state.ingrs);

  return (
    <div className='recipeDetail'>
      <img src={img} alt='' />
      <div className='ingrsbox'>
        <div className='ingrs_txt'>
          <h2>{title}</h2>
          <ul>
            {ingrs.map((ingrs, i) => (
              <li key={i}>
                <i className='fa fa-check'></i>
                {ingrs.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
