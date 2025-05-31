import { CalendarHeader } from "./CalendarHeader";
import { EarningCard } from "./Earning";

type Props = {
  apiKey?: string;
  baseUrl?: string;
};

const EarningCalendar = ({ apiKey, baseUrl }: Props) => (
  <section className="bg-defaultYellow shadow-lg rounded-md max-w-screen-xl my-2">
    <CalendarHeader />
    <EarningCard apiKey={apiKey} baseUrl={baseUrl} />
  </section>
);

export default EarningCalendar;
