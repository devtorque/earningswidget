import EarningCalendar from "./components";

type Props = {
  config: {
    apiKey: string;
    baseUrl: string;
  };
};

function App({ config }: Props) {
  return (
    <div className="w-full h-full">
      <div className="min-w-[1200px] flex justify-center mx-auto">
        <EarningCalendar apiKey={config.apiKey} baseUrl={config.baseUrl} />
      </div>
    </div>
  );
}

export default App
