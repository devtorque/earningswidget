import { useEarningsData } from '../../hooks/useEarningsData';
import { ErrorComponent } from '../ErrorComponent';
import EarningsDisplay from './EarningsDisplay';

function EarningCard() {
  const { earnings, logos, loading, error } = useEarningsData();

  if (error) return (
    <ErrorComponent error={error} />
  );
  
  return <EarningsDisplay earnings={earnings} logos={logos} loading={loading} />;
}

export default EarningCard;
