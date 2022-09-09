import Icons from "./assets/Icons";

const CounterCard = ({ title, icon, count }) => {
  return (
    <article className={`CounterCard__${title}`}>
      <div>
        <Icons name={icon} />
        <h2>{title}</h2>
      </div>

      <div>
        <h3>{count}</h3>
      </div>
    </article>
  );
};
export default CounterCard;