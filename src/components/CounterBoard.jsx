import { useContext } from "react";
import DataCTX from "../context/DataCTX";
import CounterCard from "./CounterCard";

const CounterBoard = () => {
  const { totalCount, incompleteCount, completeCount } = useContext(DataCTX);

  const total = { title: "Total", icon: "All", count: totalCount };
  const complete = {
    title: "Complete",
    icon: "Complete",
    count: completeCount,
  };
  const incomplete = {
    title: "Incomplete",
    icon: "Incomplete",
    count: incompleteCount,
  };
  const allCounts = [incomplete, complete, total];

  return (
    <section className="CounterBoard">
      {allCounts.map(({title, icon, count}) => (
        <CounterCard
          key={`counterCard-${title}`}
          title={title}
          icon={icon}
          count={count}
        />
      ))}
    </section>
  );
};
export default CounterBoard;
