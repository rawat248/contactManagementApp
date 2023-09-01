import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MapWithMarkers from "./MapWithMarkers";

const queryClient = new QueryClient();

const Chart: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MapWithMarkers />
      </div>
    </QueryClientProvider>
  );
};

export default Chart;
