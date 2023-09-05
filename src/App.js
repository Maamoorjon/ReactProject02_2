import Component from "./components/Component.js";

export default function App() {
  const hello = (arg) => `Hello ${arg}`;
  const obj = {
    color: "red",
    num: 123
  };
  return (
    <>
      <Component
        color={obj.color}
        num={obj.num}
        fn={hello}
        bool
        userObj={{ familyName: "Halnazarov", firstName: "Ma'murjon" }}
      />
    </>
  );
}
