import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoriteScreen, HomeScreen } from '../../screens';
import { COLORS } from '../../utils';

import homeImg from '../../../assets/home.png';
import homeOutlineImg from '../../../assets/home-outline.png';
import heartImg from '../../../assets/heart-color.png';
import heartOutlineImg from '../../../assets/heart-outline.png';

import styles from './HomeBottomTab.style';

const Tab = createBottomTabNavigator();

const HomeBottomTab = () => {
  function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }

    return (
      <View style={styles.tab}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          let img;

          if (label.toLowerCase() === 'home') {
            img = isFocused ? homeImg : homeOutlineImg;
          } else {
            img = isFocused ? heartImg : heartOutlineImg;
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              key={label}
              onLongPress={onLongPress}
              onPress={onPress}
              style={{ flex: 1 }}
              testID={options.tabBarTestID}
            >
              <View style={styles.tabContainer}>
                <Image
                  source={img}
                  style={styles.tabImagen}
                  tintColor={COLORS.ColorPrimaryDark}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export { HomeBottomTab };
