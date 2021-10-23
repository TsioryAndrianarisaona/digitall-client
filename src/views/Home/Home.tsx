import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import InformationAPI from '../../api/InformationAPI';
import {Colors} from '../../styles/Colors';
import styles from './style';

const Home = ({navigation, route}) => {
  const [menus, setMenus] = useState([]);

  const citizen = route.params;

  const {container, code, cardContainer, card, title, icon, columnWrapper} =
    styles;

  const getMenus = () => {
    new InformationAPI()
      .getMenu()
      .then(response => {
        setMenus(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <SafeAreaView style={container}>
      <View style={code}>
        <QRCode
          value={citizen.qrCode}
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
        data={menus}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={card}
              key={index}
              onPress={() =>
                navigation.navigate('Documents', {
                  idMenu: item.id,
                  idCitizen: citizen.id,
                })
              }>
              <Text style={title}>{item.name}</Text>
              <Icon
                name={item.photo}
                type={item.type}
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
