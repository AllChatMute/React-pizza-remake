import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { fetchFullPizza, setFullPizza } from "../redux/slices/fullPizzaSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const FullPizza: React.FC = () => {
  const { fullPizza, status } = useAppSelector((state) => state.fullPizza);
  const id = useParams().id;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await dispatch(fetchFullPizza(id));
        dispatch(setFullPizza(response.payload));
        if (status === "reject") throw new Error("Rejected!");
      } catch (error) {
        navigate("/");
        alert("Пицца не найдена!");
        console.log(error);
      }
    };
    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="fullPizza__container">
            <div className="fullPizza">
              <img
                className="fullPizza__image"
                src={fullPizza?.imageUrl}
                alt="Pizza"
              />
              <h4 className="fullPizza__title">{fullPizza?.title}</h4>
              <p className="fullPizza__description">{fullPizza?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPizza;
