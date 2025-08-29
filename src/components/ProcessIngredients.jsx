const ProcessIngredients = ({ ingredients, instructions }) => {
  return (
    <div className="flex flex-col m-10 md:flex-row" id="ingredients">
      <div className="card flex-1 bg-base-100 m-5 card-lg shadow-sm">
        <div className="card-body min-h-full">
          <h2 className="card-title text-3xl">Ingredients</h2>
          <div className="mx-7">
            <ul className="list-disc">
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <p>{ingredient}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="card flex-1 bg-base-100 m-5 card-lg shadow-sm">
        <div className="card-body min-h-full">
          <h2 className="card-title text-3xl">Steps</h2>
          <div div className="mx-7">
            <ol className="list-decimal">
              {instructions.map((instruction, index) => (
                <li key={index} className="list-row">
                  <p>{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessIngredients;
