const Dishes = ({className, image, name, ingredients, salePrice}) => {
    return ( 
    <>
    <div className="element">
    <h2>{name} - {salePrice} ₽ </h2>
    <p>(Ingredients: {ingredients})</p>
    <img src={image} alt={name} className={className} />
</div>
 
    </>
    );
};

export default Dishes;
