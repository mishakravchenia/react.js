"use strict";

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);

function App() {
  const userinfo = {
    imgSrc:
      "https://st3.depositphotos.com/12985790/18502/i/450/depositphotos_185024432-stock-photo-close-portrait-smiling-young-woman.jpg",
    firstName: "Eva",
    lastName: "Flowers",
    tel: "+380-690-497-954",
  };

  return (
    <>
      <UserCard userinfo={userinfo} />
    </>
  );
}

function UserCard({ userinfo }) {
  return (
    <>
      <section className="user-card">
        <header className="page-head">
          <img
            className="user-foto"
            src={userinfo.imgSrc}
            alt="User Foto"
          ></img>
          <h1 className="user-profil">Profile</h1>
        </header>
        <p className="user-full-name">
          Full name:{" "}
          <span>
            {userinfo.firstName} {userinfo.lastName}
          </span>
        </p>
        <p className="user-first-name">
          First name:
          <span> {userinfo.firstName}</span>
        </p>
        <p className="user-last-name">
          Last name: <span>{userinfo.lastName}</span>
        </p>
        <footer className="user-footer">
          <h3 className="contact">Contact</h3>
          <p className="tel">{userinfo.tel}</p>
        </footer>
      </section>
    </>
  );
}
