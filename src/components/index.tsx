import { CalendarHeader } from "./CalendarHeader";
import { EarningCard } from "./Earning";

const EarningCalendar = () => (
  <section className="bg-defaultYellow shadow-lg rounded-md max-w-screen-xl my-2">
    <CalendarHeader />
    <EarningCard />
  </section>
);

export default EarningCalendar;
