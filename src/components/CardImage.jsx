export default function CardImage(props) {
  const { bgColor, image } = props;
  return (
    <section
      className={`z-[3] flex h-[5.38rem] items-center justify-end overflow-hidden rounded-t-[0.938rem] ${bgColor}`}
    >
      <img
        src={image}
        alt="workImage"
        className="mr-[1.094rem] mt-[-0.625rem] w-[7rem]"
      />
    </section>
  );
}
