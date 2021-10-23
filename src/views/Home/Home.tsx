import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import {Colors} from '../../styles/Colors';
import styles from './style';

const Home = ({navigation}) => {
  const {container, code, cardContainer, card, title, icon, columnWrapper} =
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
      <View style={code}>
        <QRCode
          value="E9AC5601CEDD8747FDD7C911329F9A0BA8B78A19"
          size={150}
          color="black"
          backgroundColor="white"
          logo={require('../../../assets/logo.png')}
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="white"
        />
      </View>
      <FlatList
        data={cardItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={card}
              key={index}
              onPress={() =>
                navigation.navigate('Documents', {title: item.name})
              }>
              <Text style={title}>{item.name}</Text>
              <Icon
                name="home"
                type="antdesign"
                style={icon}
                color={Colors.white}
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
