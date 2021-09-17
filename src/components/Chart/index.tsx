import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { ChartContainer, ScrollViewContainer } from './styles';

const data = [
  { quarter: 1, earnings: 130 },
  { quarter: 2, earnings: 165 },
  { quarter: 3, earnings: 142 },
  { quarter: 4, earnings: 190 },
  { quarter: 5, earnings: 190 },
  { quarter: 6, earnings: 190 },
];

export function Chart() {
  return (
    <>
      <ChartContainer>
        <ScrollViewContainer horizontal>
          <VictoryChart
            width={100 * data.length}
            theme={VictoryTheme.material}
            domainPadding={40}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </ScrollViewContainer>
      </ChartContainer>
    </>
  );
}
