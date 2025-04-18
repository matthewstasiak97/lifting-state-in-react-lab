// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>
            + {ingredient.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
