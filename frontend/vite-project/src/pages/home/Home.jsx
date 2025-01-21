import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";
import { favoriteContext } from "../../context/FavoriteContext";

export default function Home() {
  const [data, setData] = useState([]);
  let { favorites, setFavorites } = useContext(favoriteContext);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:3000/product/");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleAddFav(id) {
    let findedFav = data.find((item) => item._id == id);
    let isExist = favorites.find((item) => item._id == findedFav._id);
    if (isExist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bu mehsul sizin favoritinizde movcuddur",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      setFavorites([...favorites, findedFav]);
    }
  }

  return (
    <div>
      <div className={`${styles.hero}`}>
        <h1>Saving Accounts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic animi
          explicabo, tenetur corrupti temporibus eos?
        </p>
      </div>

      <div className={`${styles.money} container`}>
        <div className={`${styles.moneyCards}`}>
          <div className={`${styles.moneyCard}`}>
            <img
              src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/001-wallet.svg"
              alt=""
            />
            <h1>Money Savings</h1>
            <p>
              A small river named Duden flows by their
              <br />
              place and supplies it with the necessary
              <br />
              regelialia.
            </p>
          </div>
          <div className={`${styles.moneyCard}`}>
            <img
              src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/004-cart.svg"
              alt=""
            />
            <h1>Online Shoppings</h1>
            <p>
              A small river named Duden flows by their
              <br />
              place and supplies it with the necessary
              <br />
              regelialia.
            </p>
          </div>
          <div className={`${styles.moneyCard}`}>
            <img
              src="https://preview.colorlib.com/theme/banker/images/flaticon-svg/svg/006-credit-card.svg"
              alt=""
            />
            <h1>Credit / Debit Cards</h1>
            <p>
              A small river named Duden flows by their
              <br />
              place and supplies it with the necessary
              <br />
              regelialia.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.submit} container`}>
        <div className={`${styles.submitLeft}`}>
          <img
            src="https://preview.colorlib.com/theme/banker/images/about_2.jpg.webp"
            alt=""
          />
        </div>
        <div className={`${styles.submitRight}`}>
          <h1>Amortization Compution</h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <ul>
            <li>Officia quaerat eaque neque</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipisicing elit</li>
          </ul>
          <div className={`${styles.email}`}>
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className={`${styles.aboutHeader}`}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
          <br />
          neque tempora reiciendis.
        </p>
      </div>
      <div className={`${styles.about} container`}>
        <div className={`${styles.submitLeft}`}>
          <img
            src="https://preview.colorlib.com/theme/banker/images/hero_1.jpg.webp"
            alt=""
          />
        </div>
        <div className={`${styles.submitRight}`}>
          <h1>We Solve Your Financial Problem</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. <br /> <br /> A small river named Duden flows by
            their place and supplies it with the necessary regelialia. It is a
            paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </div>
      </div>

      <div className={`${styles.aboutHeader}`}>
        <h1>Meet Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing Minus minima
          <br />
          neque tempora
        </p>
      </div>
      <div className={`${styles.meet} container`}>
        <div className={`${styles.meetCards}`}>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_5.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_6.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_7.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_8.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_1.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_2.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_3.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
          <div className={`${styles.meetCard}`}>
            <div className={`${styles.meetCardImg}`}>
              <img
                src="https://preview.colorlib.com/theme/banker/images/person_4.jpg.webp"
                alt=""
              />
            </div>
            <div className={`${styles.meetCardInfo}`}>
              <h2>Kaiara Spencer</h2>
              <p>Finance Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.aboutHeader}`}>
        <h1>Our Services</h1>
      </div>
      <div className={`${styles.service} container`}>
        <div className={`${styles.serviceCards}`}>
          {data &&
            data.map((data) => (
              <div className={`${styles.serviceCard}`}>
                <div className={`${styles.serviceCardImg}`}>
                  <img src={data.img} alt="" />
                </div>
                <div className={`${styles.serviceCardInfo}`}>
                  <h2>{data.name}</h2>
                  <span>{data.desc}</span>
                  <IconButton onClick={() => handleAddFav(data._id)}>
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
