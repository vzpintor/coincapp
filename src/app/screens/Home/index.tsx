import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {requestAssets} from '@redux/actions/asset/assetActions';
import {Container} from '@components/Container';
import Row from '@components/Row';
import Divider from '@components/Divider';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAssets());
  }, []);

  return (
    <Container unsafe>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={() => <Divider />}
        data={Array(5).fill('Hi')}
        renderItem={() => <Row />}
        keyExtractor={(_, index) => index.toString()}
      />
    </Container>
  );
};

export default HomeScreen;
