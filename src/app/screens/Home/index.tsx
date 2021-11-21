import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestAssets} from '@redux/actions/asset/assetActions';
import {Container} from '@components/Container';
import {assetState} from '@redux/selectos/assetSelecto';
import Loading from '@components/Loading';
import Search from '@components/Search';
import {homeScreenStyles} from '@screens/Home/styles';
import AssetList from '@components/AssetList';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {data, isLoading} = useSelector(assetState);

  useEffect(() => {
    dispatch(requestAssets());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container unsafe>
      <View style={homeScreenStyles.searchContainer}>
        <Search />
      </View>

      {data && data.length > 0 && <AssetList assets={data} />}
    </Container>
  );
};

export default HomeScreen;
