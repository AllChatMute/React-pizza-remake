import { Link } from "react-router";

const EmptyCartBlock = () => {
  return (
    <>
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы ещё не заказывали пиццу. Для того, чтобы
              заказать пиццу, перейди на главную страницу.
            </p>
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCartBlock;
