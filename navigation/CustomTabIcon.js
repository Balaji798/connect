import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, Animated} from 'react-native';

const CustomTabIcon = ({focused, icon, label}) => {
  const [iconOffset] = useState(new Animated.Value(0)); // For icon translation
  const [labelOpacity] = useState(new Animated.Value(0)); // For label opacity
  const [labelOffset] = useState(new Animated.Value(10)); // For label translation (slide in/out)

  useEffect(() => {
    if (focused) {
      // Animate the icon to move left and label to fade in & slide up
      Animated.parallel([
        Animated.timing(iconOffset, {
          toValue: -5, // Move the icon slightly to the left
          duration: 200, // Animation duration in milliseconds
          useNativeDriver: true,
        }),
        Animated.timing(labelOpacity, {
          toValue: 1, // Fade in the label
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(labelOffset, {
          toValue: 0, // Slide label up from 10px below
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Reset the icon's position and fade out/slide down the label
      Animated.parallel([
        Animated.timing(iconOffset, {
          toValue: 0, // Reset icon to its original position
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(labelOpacity, {
          toValue: 0, // Fade out the label
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(labelOffset, {
          toValue: 10, // Slide label down
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [focused, iconOffset, labelOpacity, labelOffset]); // Run the effect whenever 'focused' changes

  return (
    <View
      style={[
        styles.tabContainer,
        {
          backgroundColor: focused ? '#EEE6FF' : '#fff',
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 20,
        },
      ]}>
      <Animated.View style={{transform: [{translateX: iconOffset}]}}>
        <Image
          source={icon}
          style={{
            tintColor: focused ? '#995BFF' : '#060047',
            width: 24,
            height: 24,
          }}
        />
      </Animated.View>
      {focused && (
        <Animated.View
          style={[
            styles.tabLabelContainer,
            {opacity: labelOpacity, transform: [{translateY: labelOffset}]},
          ]}>
          <Text style={[styles.tabLabel, {color: focused ? '#995BFF' : '#060047'}]}>
            {label}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default CustomTabIcon;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row', // Aligns the icon and label horizontally
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabLabelContainer: {
    marginLeft: 6, // Space between the icon and the label
  },
});
