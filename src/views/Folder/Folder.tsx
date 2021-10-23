import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../../styles/Colors';
import styles from './style';

const Folder = ({}) => {
  const {container, title, folderContainer, columnWrapper, create} = styles;

  const cardItem: any[] = [
    {
      id: 1,
      name: 'Dossier 1',
      iconName: 'home',
      iconType: 'entypo',
    },
    {
      id: 2,
      name: 'Dossier 2',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 3,
      name: 'Dossier 3',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 4,
      name: 'Dossier 4',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 5,
      name: 'Dossier 5',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 6,
      name: 'Dossier 6',
      iconName: 'home',
      iconType: 'feather',
    },
  ];

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={title}>Mes documents</Text>
      </View>
      <FlatList
        data={cardItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity key={index}>
              <Icon
                name="folder"
                type="entypo"
                color={Colors.red}
                size={50}
                tvParallaxProperties={undefined}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={columnWrapper}
        style={folderContainer}
      />
      <TouchableOpacity style={create}>
        <Icon
          name="plus"
          type="antdesign"
          color={Colors.white}
          tvParallaxProperties={undefined}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Folder;
