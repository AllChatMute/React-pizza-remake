import React from "react";
import { Link } from "react-router";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Страница не найдена😕</h2>
            <p className="not-found__p">
              Возможно, вы перешли по некорректной ссылке
              <br />
              Для того, чтобы заказать пиццу, перейдите на главную страницу.
            </p>

            <Link to="/" className="button button--black">
              <span>На главную</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
