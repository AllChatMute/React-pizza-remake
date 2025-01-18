import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import PizzaBlockType from "../types/PizzaBlockInterface";

const FullPizza: React.FC = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<PizzaBlockType | null>(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(
          `https://66cf3d37901aab24842179de.mockapi.io/Items/${id}`
        );
        if (response.status !== 200) throw new Error();
        setPizza(response.data);
      } catch (error) {
        navigate("/");
        alert("Пицца не найдена!");
        console.log(error);
      }
    };
    fetchPizza();
  }, [id, navigate]);
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="fullPizza__container">
            <div className="fullPizza">
              <img
                className="fullPizza__image"
                src={pizza?.imageUrl}
                alt="Pizza"
              />
              <h4 className="fullPizza__title">{pizza?.title}</h4>
              <p className="fullPizza__description">{pizza?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPizza;
