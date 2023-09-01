import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import List from "./List"; // Assuming your LineChart component is in a file named LineChart.js

const queryClient = new QueryClient();

const Chart: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <List />
      </div>
    </QueryClientProvider>
  );
};

export default Chart;
