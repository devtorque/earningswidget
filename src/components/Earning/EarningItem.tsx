import { type Earning } from '../../types/earningTypes';

const EarningItem = ({ item, logo }: { item: Earning; logo?: string }) => (
  <a
    href={`https://www.benzinga.com/quote/${item.ticker.toLowerCase()}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center min-w-fit max-h-18"
    title={item.ticker}
  >
    <div className="text-[6px] border border-gray-300 rounded p-0.5 text-gray-400">
      {item.ticker}
    </div>
    {logo ? (
      <img
        src={logo}
        alt={item.ticker}
        className="object-fill w-18 h-12"
      />
    ) : (
      <span className="text-xs h-12">{item.ticker}</span>
    )}
  </a>
);

export default EarningItem;
