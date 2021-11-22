import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {GraphicProps} from '@components/Graphic/props';
import {useDispatch, useSelector} from 'react-redux';
import {assetHistoryState} from '@redux/selectos/assetSelecto';
import {requestAssetHistory} from '@redux/actions/asset/assetActions';
import {IHistory, intervalType} from '@shared/assetInterface';
import dayjs from 'dayjs';
import {palette} from '@shared/theme/palette';
import {graphicStyles} from '@components/Graphic/styles';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';

const format = 'DD/MM/YYYY';

const Graphic = ({assetId}: GraphicProps) => {
  const dispatch = useDispatch();

  const {isLoading, data: historyData} = useSelector(assetHistoryState);

  const [labels, setLabels] = useState<Array<string>>([]);
  const [dataset, setDataset] = useState<Array<number>>([]);

  const [filter, setFilter] = useState<intervalType>('h12');

  useEffect(() => {
    dispatch(requestAssetHistory(filter, assetId));
  }, [filter]);

  useEffect(() => {
    if (historyData && historyData.length > 0) {
      setLabels(
        historyData.map((history: IHistory) =>
          dayjs(history.date).format(format),
        ),
      );

      setDataset(
        historyData.map((history: IHistory) =>
          parseFloat(parseFloat(history.priceUsd).toFixed(2)),
        ),
      );
    }
  }, [historyData]);

  const axesSvg = {fontSize: 10, fill: 'grey'};
  const verticalContentInset = {top: 10, bottom: 10};
  const xAxisHeight = 30;

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <View style={graphicStyles.graphContainer}>
          <YAxis
            data={dataset}
            style={{marginBottom: xAxisHeight}}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
          <View style={graphicStyles.chart}>
            <LineChart
              style={{flex: 1}}
              data={dataset}
              contentInset={verticalContentInset}
              svg={{stroke: '#0D1B26'}}>
              <Grid />
            </LineChart>
            <XAxis
              style={{marginHorizontal: -10, height: xAxisHeight}}
              data={dataset}
              formatLabel={(value, index) => index}
              contentInset={{left: 10, right: 10}}
              svg={axesSvg}
            />
          </View>
        </View>
      )}
      <View style={graphicStyles.filterContainer}>
        <TouchableOpacity
          onPress={() => setFilter('h12')}
          style={[
            graphicStyles.button,
            {
              backgroundColor:
                filter === 'h12' ? palette.green : palette.darkGreen,
            },
          ]}>
          <Text style={graphicStyles.buttonTitle}>12H</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setFilter('d1')}
          style={[
            graphicStyles.button,
            {
              backgroundColor:
                filter === 'd1' ? palette.green : palette.darkGreen,
            },
          ]}>
          <Text style={graphicStyles.buttonTitle}>1D</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setFilter('m1')}
          style={[
            graphicStyles.button,
            {
              backgroundColor:
                filter === 'm1' ? palette.green : palette.darkGreen,
            },
          ]}>
          <Text style={graphicStyles.buttonTitle}>1M</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Graphic);
