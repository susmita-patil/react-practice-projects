import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};
const Menu = () => {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return (
              <Pizza
                key={pizza.name}
                pizzaObj={pizza}
                // name={pizza.name}
                // ingredients={pizza.ingredients}
                // photoName={pizza.photoName}
                // price={pizza.price}
                // soldOut={pizza.soldOut}
              />
            );
          })}
        </ul>
      )}
    </main>
  );
};
const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("sorry we are currently closed");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} */}
      {isOpen ? (
        <div className="order">
          <p>We are currently open untill {closeHour}. You can order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>
            Sorry we are currently closed. Please visit again at {openHour}. You
            can order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default App;
