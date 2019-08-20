import React from "react";

const order = props => {
  const ingredients = [];

  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 .8rem",
          border: ".1rem solid #ccc",
          padding: ".5rem"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className="order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
