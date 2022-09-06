import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  // Event es un objeto {} y podemos desestructurarlo y apuntar al target que es lo que nos importa
  // const inputChange = (event) => {
  //     console.log(event);
  //     console.log(event.target.value);
  //     setInputValue(event.target.value)
  // }

  const inputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    console.log(inputValue);
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim()) // es la funcion que traemos del componente padre
    setInputValue('')
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        //   onChange={(event) => inputChange(event)} // como el event esta desestructurado no hace falta llamarlo aca.
        onChange={inputChange}
      />
    </form>
  );
};

export default AddCategory;
