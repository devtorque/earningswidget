import React from 'react';
import { type Earning, type Session } from '../../types/earningTypes';
import EarningItem from './EarningItem';

type Props = {
  day: string;
  earnings: { [key in Session]?: Earning[] };
  logos: { [symbol: string]: string };
  loading: boolean;
};

const EarningColumn: React.FC<Props> = ({ day, earnings, logos, loading }) => {

  return (
    <div
      className={`${
        day === 'Friday'
          ? 'flex-[0.5] min-w-[150px]'
          : 'flex-1 basis-0 min-w-[250px]'
      } flex flex-col`}
    >
      <div className="text-center font-bold text-md">{day}</div>
      <div className="flex flex-row mb-1">
        {day === 'Friday' ? (
          <div className="flex-1 text-center text-xs">Before Open</div>
        ) : (
          <>
            <div className="flex-1 text-center text-xs">Before Open</div>
            <div className="flex-1 text-center text-xs">After Close</div>
          </>
        )}
      </div>
      {loading ? (
        <div className="flex flex-1 bg-gray-100 min-h-[650px] mb-2 mx-0.5 animate-pulse" />
      ) : (
      <div className="flex flex-1 bg-white mb-2 mx-0.5 min-h-[650px] overflow-y-auto">
        {day === 'Friday' ? (
          <div className="flex-1 flex flex-col items-center">
            <div className="flex flex-col items-center min-h-[160px] mt-2">
              {(earnings['Before Open'] || [])
                .slice(0, 10)
                .map((item) => (
                  <EarningItem key={item.ticker} item={item} logo={logos[item.ticker]} />
                ))}
            </div>
          </div>
        ) : (
          (['Before Open', 'After Close'] as Session[]).map((session) => (
            <div key={session} className="flex-1 flex flex-col items-center">
              <div className="flex flex-col items-center min-h-[160px] mt-2">
                {(earnings[session] || [])
                  .slice(0, 10)
                  .map((item) => (
                    <EarningItem key={item.ticker} item={item} logo={logos[item.ticker]} />
                  ))}
              </div>
            </div>
          ))
          )}
        </div>
      )}
    </div>
  );
};

export default EarningColumn;
