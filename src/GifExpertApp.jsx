import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "one punch"
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    // categories.push(newCategory)
    setCategories([newCategory, ...categories]);
    // setCategories((cat)=>[...cat,'valorant'])
  };

  // console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)} // onNewCategory es una propiedad/funcion de mi componente
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
