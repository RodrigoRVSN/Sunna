import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { styles } from './styles';

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
      <View style={styles.container}>
        <ScrollView horizontal style={styles.scrollView}>
          <VictoryChart
            width={100 * data.length}
            theme={VictoryTheme.material}
            domainPadding={40}
          >
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
        </ScrollView>
      </View>
    </>
  );
}
