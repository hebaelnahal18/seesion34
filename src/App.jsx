import Cart from "./Components/Cart";

function App() {
  const person = [
    { id: 1, name: "Heba", age: 23, isStudent: false, color: "white" },
    { id: 2, name: "Nada", age: 21, isStudent: true, color: "Red" },
    { id: 3, name: "Lama", age: 19, isStudent: true, color: "black" },
    { id: 4, name: "Ahmed", age: 17, isStudent: true, color: "yallow" },
    { id: 5, name: "Ehab", age: 24, isStudent: false },
  ];
  return (
    <>
      {/* Ternary Operator  */}
      <h1 className="font-bold text-center text-3xl">Ternary Operator </h1>
      {person.map((item) => {
        return item.id > 2 ? (
          <Cart
            name={item.name}
            age={item.age}
            color={item.color}
            key={item.id}
          >
            <h2 className="text-gray-700 text-lg">
              Are you Student?
              <span className="font-semibold text-pink-600 ml-2">
                {item.isStudent === true
                  ? "you are Student"
                  : "you are Gradiuent"}
              </span>
            </h2>
          </Cart>
        ) : item.id == 1 ? (
          <>
            <h2 className="font-bold text-center ">Hello </h2>
          </>
        ) : (
          <>
            <h2 className="font-bold text-center ">Not in range</h2>
          </>
        );
      })}
      {/* if Condition  */}
      <h1 className="font-bold text-center text-3xl">if Condition</h1>
      {person.map((item) => {
        if (item.id > 2) {
          return (
            <>
              <Cart name={item.name} age={item.age} key={item.id}>
              </Cart>
            </>
          );
        } else if (item.id == 1) {
          return (
            <>
              <h2 className="font-bold text-center ">Hello </h2>
            </>
          );
        } else {
          return (
            <>
              <h2 className="font-bold text-center ">Not in range</h2>
            </>
          );
        }
      })}

      {/* <Cart name={person[1].name} age={person[1].age}>
        {person[1].isStudent === true ? "you are Student" : "you are Gradiuent"}
      </Cart>
            <Cart name={person[0].name} age={person[0].age}>
        {person[0].isStudent === true ? "you are Student" : "you are Gradiuent"}
      </Cart> */}
    </>
  );
}

export default App;
