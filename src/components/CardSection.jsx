import CardWithButton from "./CardWithButton.jsx";

const CardSection = ({recipes}) => {
    if (!recipes || recipes.length === 0) {
    return (
      <div className="p-6 text-center w-full">
        <h2>No Recipes Found...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mx-10 items-stretch sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {recipes.map((recipe) => (
            <CardWithButton key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
