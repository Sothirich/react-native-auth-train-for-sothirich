import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Body} from '../../components/Body';
import {Header} from '../../components/Header';
import {SubmitButton} from '../../components/SubmitButton';
import {useAuth} from '../../contexts/auth';
import {COLORS} from '../../theme/Color';
import {ListArticle} from './ListArticle';

const Home = ({navigation}) => {
  const {logout, user, article} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header label={`Welcome ${user?.name}`}></Header>
      <Body>
        <View style={{flex: 1}}>
          <FlatList
            data={article.data}
            renderItem={({item}) => <ListArticle article={item} />}
          />
        </View>
      </Body>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});

export default Home;
