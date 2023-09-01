// import React from 'react';
// import { ResponsiveLine } from '@nivo/line';
// import { useQuery } from 'react-query';

// interface CountryData {
//   country: string;
//   deaths: number;

// }

// const fetchData = async () => {
//   const response = await fetch('https://disease.sh/v3/covid-19/countries');
//   const data = await response.json();
//   return data;
// };

// const List: React.FC = () => {
//   const { data, status } = useQuery<CountryData[]>('countryData', fetchData);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'error') {
//     return <div>Error fetching data</div>;
//   }

//   if (!data) {
//     return <div>No data available</div>;
//   }

//   const chartData = data.map((country) => ({
//     id: country.country,
//     data: [{ x: country.country, y: country.deaths }],
//   }));

//   return (
//     <div style={{ height: '400px' }}>
//       <ResponsiveLine
//         data={chartData}
//         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//         yFormat=" >-.2f"
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//         }}
//         axisLeft={{
//           tickSize: 5,
//           tickPadding: 5,
//           tickRotation: 0,
//           legend: 'Deaths',
//           legendOffset: -40,
//         }}
//         enablePoints={false}
//         useMesh={true}
//       />
//       </div>
//   );
// };

// export default List;

import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useQuery } from "react-query";

interface CountryData {
  country: string;
  deaths: number;
}

const fetchData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();
  return data;
};

const List: React.FC = () => {
  const { data, status } = useQuery<CountryData[]>("countryData", fetchData);
  const [topCountries, setTopCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    if (status === "success" && data) {
      const sortedData = data.sort((a, b) => b.deaths - a.deaths);

      const top10Countries = sortedData.slice(0, 10);

      setTopCountries(top10Countries);
    }
  }, [data, status]);

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div style={{ height: "400px" }}>
          <ResponsiveLine
            data={topCountries.map((country) => ({
              id: country.country,
              data: [{ x: country.country, y: country.deaths }],
            }))}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Deaths",
              legendOffset: -40,
            }}
            enablePoints={false}
            useMesh={true}
          />
        </div>
      )}
    </div>
  );
};

export default List;
