import dayjs from 'dayjs';
import logo from '../../assets/ewLogo.svg';


import { getLastMondayDate } from '../../utils/getLastMondayDate';

export const CalendarHeader = () => {
  const lastMonday = dayjs(getLastMondayDate());
  const formattedDate = lastMonday.format('MMMM D, YYYY');

  return (
    <header className="flex my-2">
      <img src={logo} alt="logo" className="w-1/4" />
      <div className="w-3/4 flex justify-center">
        <div className="flex flex-col">
          <span className="text-3xl font-bold">
            Most Anticipated Earnings Releases
          </span>
          <div className="text-xs text-center">for the week beginning</div>
          <span className="text-3xl font-bold text-center">
            {formattedDate}
          </span>
        </div>
      </div>
    </header>
  );
};