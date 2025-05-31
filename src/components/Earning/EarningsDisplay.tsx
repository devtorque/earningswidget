import React from 'react';
import EarningColumn from './EarningColumn';
import { type EarningsGrouped, daysOfWeek } from '../../types/earningTypes';

type Props = {
  earnings: EarningsGrouped;
  logos: { [symbol: string]: string };
  loading: boolean;
};

const EarningsDisplay: React.FC<Props> = ({ earnings, logos, loading }) => (
  <div className="flex flex-row relative mx-2">
    <div className="absolute inset-0 z-0 left-0 flex items-center pointer-events-none">
      <img
        src="/ewLogo.svg"
        alt="background logo"
        className="opacity-5 w-11/12"
        style={{ filter: "grayscale(1)" }}
      />
    </div>
      {daysOfWeek.map((day) => (
      <EarningColumn
        key={day}
        day={day}
        earnings={earnings[day] || { 'Before Open': [], 'After Close': [] }}
        logos={logos}
        loading={loading}
      />
    ))}
  </div>
);

export default EarningsDisplay; 
