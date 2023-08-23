export default function BigHourCount(props) {
  return (
    <h3 className=" text-[2rem] font-light xl:text-[3.5rem]">
      {props.currentTime}hrs
    </h3>
  );
}
