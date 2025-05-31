import { useEarningsData } from '../../hooks/useEarningsData';
import { ErrorComponent } from '../ErrorComponent';
import EarningsDisplay from './EarningsDisplay';

type Props = {
  apiKey?: string;
  baseUrl?: string;
};

function EarningCard({ apiKey, baseUrl }: Props) {
  const { earnings, logos, loading, error } = useEarningsData({ apiKey, baseUrl });

  if (error) return (
    <ErrorComponent error={error} />
  );
  
  return <EarningsDisplay earnings={earnings} logos={logos} loading={loading} />;
}

export default EarningCard;
