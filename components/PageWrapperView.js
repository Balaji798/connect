import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PageWrapperView = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: props.bottomSafeArea ? insets.bottom || 20 : 0,
        ...props.style,
      }}>
      <StatusBar backgroundColor={props.barColor} barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{
          backgroundColor: '#fff',
        }}>
        {props.children}
      </ScrollView>
    </View>
  );
};

export default PageWrapperView;
