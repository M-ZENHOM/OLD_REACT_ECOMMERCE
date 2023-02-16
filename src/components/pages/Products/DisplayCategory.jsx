const DisplayCategory = ({
  getAllCategoryProducts,
  categories,
  setToggleList,
}) => {
  return (
    <>
      {categories?.map((cat) => (
        <li
          key={cat}
          onClick={() => {
            getAllCategoryProducts(cat);
            setToggleList(false);
          }}
          className="category"
        >
          {cat}
        </li>
      ))}
    </>
  );
};

export default DisplayCategory;
