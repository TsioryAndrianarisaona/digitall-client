import React from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import styles from './style';

const Home = ({navigation}) => {
  const {container, avatar, cardContainer, card, title, icon, columnWrapper} =
    styles;

  const cardItem: any[] = [
    {
      name: 'Fokontany',
      iconName: 'home',
      iconType: 'entypo',
    },
    {
      name: 'Commune',
      iconName: 'home',
      iconType: 'feather',
    },
  ];

  return (
    <SafeAreaView style={container}>
      <Avatar
        rounded
        size="xlarge"
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        containerStyle={avatar}
      />
      <FlatList
        data={cardItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={card}
              key={index}
              onPress={() => navigation.navigate('Documents')}>
              <Text style={title}>{item.name}</Text>
              <Icon
                name="home"
                type="antdesign"
                style={icon}
                tvParallaxProperties={undefined}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={columnWrapper}
        style={cardContainer}
      />
    </SafeAreaView>
  );
};

export default Home;
