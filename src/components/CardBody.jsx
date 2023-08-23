import AggregateCount from "./AggregateCount";
import BigHourCount from "./BigHourCount";
import CardHeader from "./CardHeader";

export default function CardBody(props) {
  const { title, interval, currentTime, previousTime } = props;

  return (
    <section
      className="z-10 mt-[-1.875rem] cursor-pointer 
rounded-[0.938rem] bg-Dark_blue px-[1.5rem] py-[1.75rem] hover:bg-hover_color"
    >
      <section className="flex flex-col justify-between">
        <CardHeader title={title} />
        <div
          className="flex items-center justify-between xl:mt-6 
    xl:flex-col xl:items-start xl:justify-normal "
        >
          <BigHourCount currentTime={currentTime} />
          <AggregateCount interval={interval} time={previousTime} />
        </div>
      </section>
    </section>
  );
}
