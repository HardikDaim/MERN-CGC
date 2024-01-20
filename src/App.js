export default function App() {
  const data = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Mango",
    "Cherry",
    "Blueberry",
    "Kiwi",
    "Peach",
    "Plum",
    "Raspberry",
    "Blackberry",
  ];

  const numbers = [
    12, 5, 27, 8, 42, 19, 3, 35, 14, 50, 1, 23, 7, 31, 10, 46, 18, 9, 38, 20,
    49, 15, 4, 26, 33, 11, 29, 6, 45, 17, 36, 22, 2, 30, 48, 16, 40, 13, 25, 37
  ];

  return (
    <>
      {/* Program to Take an array of String and convert to UpperCase */}
      <h1>Array of Strings</h1>
      <ol>
        {data.map((item, index) => {
          return <li key={index}>{item.toUpperCase()}</li>;
        })}
      </ol>
      {/* Program to print Even numbers from Array */}
      <h1>Array of Even Numbers</h1>
      <ol>
        {numbers.map((item, index) => {
          return item % 2 === 0 ? <li key={index}>{item}</li> : null;
        })}
      </ol>
    </>
  );
}
