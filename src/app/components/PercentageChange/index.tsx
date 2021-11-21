import React from 'react';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';
import {percentage} from '@utils/number';
import {Text} from 'react-native';
import {PercentageProps} from '@components/PercentageChange/props';
import ArrowDownIcon from '@components/icons/ArrowDownIcon';
import {percentageChangeStyles} from '@components/PercentageChange/styles';
import {palette} from '@shared/theme/palette';

const PercentageChange = ({changePercent}: PercentageProps) => {
  const isDown = parseFloat(changePercent) < 0;
  const absPercentage = percentage(Math.abs(parseFloat(changePercent)));

  return (
    <>
      {isDown ? (
        <ArrowDownIcon width={30} height={30} color={palette.red} />
      ) : (
        <ArrowUpIcon width={30} height={30} color={palette.green} />
      )}
      <Text
        style={
          isDown ? percentageChangeStyles.down : percentageChangeStyles.up
        }>
        {absPercentage}%
      </Text>
    </>
  );
};

export default PercentageChange;
