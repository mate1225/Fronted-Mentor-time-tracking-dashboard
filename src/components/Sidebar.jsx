import profilePicture from "../assets/images/image-jeremy.png";

export default function Sidebar(props) {
  const {
    active,
    onDailyButtonClick,
    onWeeklyButtonClick,
    onMonthlyButtonClick,
  } = props;

  return (
    <section
      className="mt-[5.063rem] bg-Dark_blue rounded-[0.938rem] 
       xl:mt-[0rem] xl:row-span-2 md:row-span-1 md:col-span-2 xl:col-span-1 xl:max-w-[22.1rem] 2xl:max-w-none"
    >
      <section
        className="bg-Blue p-[2.563rem] pl-[1.875rem]
       rounded-[0.938rem] flex gap-x-[1.25rem] xl:flex-col items-center xl:p-0 
       xl:pl-[2rem] xl:pr-[5.063rem] xl:pt-[2.313rem] xl:pb-[5rem] xl:items-start"
      >
        <img
          src={profilePicture}
          alt="profile_picture"
          className="xl:border-[0.25rem] border-2 border-solid border-white rounded-full 
          w-[3rem] lx:self-start xl:mb-[2.688rem] md:w-[5.5rem]"
        />
        <div>
          <h3 className="text-Pale_Blue text-[0.938rem] font-normal ">
            Report for
          </h3>
          <h1
            className=" text-[1.5rem] font-light md:text-[2.5rem] 
            xl:leading-[3.75rem] xl:flex xl:flex-col"
          >
            Jeremy <span>Robson</span>
          </h1>
        </div>
      </section>
      <section
        className="flex p-[1.625rem] pb-[2rem] justify-between 
      xl:items-start  flex-wrap xl:flex-col  xl:gap-[1.313rem] "
      >
        <button
          className={`font-normal cursor-pointer hover:text-white ${
            active === "daily" ? "" : "text-Desaturated_blue"
          }`}
          onClick={onDailyButtonClick}
        >
          Daily
        </button>
        <button
          className={`font-normal cursor-pointer hover:text-white ${
            active === "weekly" ? "" : "text-Desaturated_blue"
          }`}
          onClick={onWeeklyButtonClick}
        >
          Weekly
        </button>
        <button
          className={`font-normal cursor-pointer hover:text-white ${
            active === "monthly" ? "" : "text-Desaturated_blue"
          }`}
          onClick={onMonthlyButtonClick}
        >
          Monthly
        </button>
      </section>
    </section>
  );
}
