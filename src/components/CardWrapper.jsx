export default function CardWrapper(props) {
  return (
    <section className="mt-6 grid max-h-[18.2rem] md:mt-0 xl:w-[15.9rem]">
      {props.children}
    </section>
  );
}
