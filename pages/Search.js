import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import PageWrapperView from '../components/PageWrapperView';
import {globalStyle} from '../globalStyle/globalStyle';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {reviewData, serviceData1, serviceData2} from '../data';

const {width, height} = Dimensions.get('window');
const Search = () => {
  return (
    <PageWrapperView barColor={'#ffb5b1'}>
      <ScrollView>
        <LinearGradient
          colors={['#ffb5b1', '#fcb2b4', '#f1a5bd']}
          style={styles.linearGradient}>
          <View style={globalStyle.flex}>
            <Feather name="menu" size={30} color="#fff" />
            <Image
              source={require('../assets/search/logo.png')}
              style={{width: 45, height: 35, objectFit: 'contain'}}
            />
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/search/notification.png')}
                style={{width: 25, height: 25, objectFit: 'contain'}}
              />
            </View>
          </View>
          <View
            style={{
              borderRadius: 20,
              borderBottomLeftRadius: 0,
              paddingBottom: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{paddingTop: 10}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
                  Hello,
                </Text>
                <Text style={{fontSize: 24, color: '#000'}}>
                  Fancy for a wash today
                </Text>
              </View>
              <Image
                source={require('../assets/search/paw-1.png')}
                style={{
                  width: 60,
                  height: 55,
                  objectFit: 'contain',
                  position: 'absolute',
                  left: 0,
                  top: 90,
                }}
              />
              <Image
                source={require('../assets/search/paw-2.png')}
                style={{
                  width: 50,
                  height: 45,
                  objectFit: 'contain',
                  position: 'absolute',
                  right: -15,
                  top: 12,
                }}
              />
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            width: Dimensions.get('window').width - 5,
            backgroundColor: '#fff',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 20,
            position: 'absolute',
            top: 210,
            paddingTop: 20,
            paddingHorizontal: 20,
          }}>
          <View
            style={[
              globalStyle.flex,
              {
                backgroundColor: '#ffedf2',
                paddingHorizontal: 10,
                borderRadius: 5,
              },
            ]}>
            <Feather name="search" color="#FF6694" size={25} />
            <TextInput
              placeholder="What are you looking for?"
              placeholderTextColor="#FF6694"
              style={{width: '80%'}}
            />
            <Image
              source={require('../assets/search/filter.png')}
              style={{width: 35, height: 35, objectFit: 'contain'}}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Swiper
            loop={true}
            autoplay={true}
            showsPagination={false}
            autoplayTimeout={2.5}
            vertical={true} // Ensure this prop is set to true for vertical swiping
            style={{height: 200, marginTop: 20}}>
            {[1, 2, 3].map((url, index) => (
              <View key={index} style={styles.slide}>
                <Image
                  source={require('../assets/search/banner.png')}
                  style={styles.image}
                />
              </View>
            ))}
          </Swiper>
          <View style={[globalStyle.flex, {paddingBottom: 10}]}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
              Popular Services
            </Text>
            <Entypo name="dots-three-horizontal" size={20} color="#000" />
          </View>
          <View style={globalStyle.flex}>
            <View>
              {serviceData1.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 180,
                    height: index % 2 === 0 ? 190 : 140,
                    marginBottom: 5,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  
                  <View>
                    <Image
                      source={item.icon}
                      style={{
                        width: "100%",
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                    <Text style={{color: '#000', fontSize: 16}}>
                      Pet {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{paddingTop:-10}}>
              {serviceData2.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 180,
                    height: index % 2 === 0 ? 160 : 210,
                    marginBottom: 10,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  <View>
                    <Image
                      source={item.icon}
                      style={{
                        width: "100%",
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={[globalStyle.flex, {paddingBottom: 10}]}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
              Services Provider
            </Text>
            <Entypo name="dots-three-horizontal" size={20} color="#000" />
          </View>
          {[1, 2, 3].map(item => (
            <View
              key={item}
              style={{
                backgroundColor: '#FFE7EA',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                overflow: 'hidden',
                marginBottom: 10,
              }}>
              <Image
                source={require('../assets/search/corner-2.png')}
                style={{
                  width: 57,
                  height: 57,
                  objectFit: 'contain',
                  position: 'absolute',
                  left: -3,
                  bottom: 0,
                }}
              />
              <View style={globalStyle.center}>
                <Image
                  source={require('../assets/search/profile.png')}
                  style={{width: 70, height: 70, objectFit: 'contain'}}
                />
                <View
                  style={{
                    height: 100,
                    paddingLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: '#060047',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Rohit Singhania
                  </Text>
                  <Text style={{width: 230, fontSize: 12, color: '#060047'}}>
                    Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#CF76DD',
                      width: 100,
                      paddingHorizontal: 10,
                      borderRadius: 5,
                      paddingVertical: 5,
                      marginTop: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Know More
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                source={require('../assets/search/corner-1.png')}
                style={{
                  width: 72,
                  height: 72,
                  objectFit: 'contain',
                  position: 'absolute',
                  right: 0,
                }}
              />
            </View>
          ))}
          <View style={[globalStyle.flex, {paddingBottom: 10}]}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
              Ratings
            </Text>
            <Entypo name="dots-three-horizontal" size={20} color="#000" />
          </View>
          <View style={[globalStyle.flex, {paddingBottom: 10}]}>
            <Text style={{color: '#FF6694', fontSize: 16, fontWeight: 'bold'}}>
              13 Reviews
            </Text>
            <Text style={{color: '#FF6694', fontSize: 16, fontWeight: 'bold'}}>
              Write A REVIEW{' '}
              <FontAwesome5 name="edit" size={20} color="#FF6694" />
            </Text>
          </View>
          {reviewData.map((item, index) => (
            <View
              key={index}
              style={[
                globalStyle.flex,
                {
                  borderWidth: 0.8,
                  borderColor: '#FFCCD2',
                  borderRadius: 15,
                  marginBottom: 10,
                  overflow:"hidden",
                  paddingRight:-1
                },
              ]}>
              <Image
                source={require('../assets/search/corner-3.png')}
                style={{
                  width: 87,
                  height: 87,
                  objectFit: 'contain',
                  position: 'absolute',
                  left: -20,
                  bottom: 0,
                }}
              />
              <View style={{paddingLeft: 20,width:250,height:90}}>
                <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <View style={globalStyle.center}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <Image
                      source={
                        i <= item.rating
                          ? require('../assets/search/review/full.png')
                          : require('../assets/search/review/outline.png')
                      }
                      style={{width: 20,height:20, objectFit: 'contain', marginRight: 2}}
                    />
                  ))}
                </View>
                <Text style={{color: '#000'}}>{item.review}</Text>
              </View>
              <Image
                source={item.profile}
                style={{width: 105,height:100, objectFit: 'contain',borderTopRightRadius:15,borderBottomRightRadius:15}}
              />
            </View>
          ))}
        </View>
        <Image
          source={require('../assets/search/pat-1.png')}
          style={{
            width: 70,
            objectFit: 'contain',
            position: 'absolute',
            right: 175,
            top: 95,
          }}
        />
        <Image
          source={require('../assets/search/pat-2.png')}
          style={{
            width: 90,
            objectFit: 'contain',
            position: 'absolute',
            right: 90,
            top: 82,
          }}
        />
        <Image
          source={require('../assets/search/pat-3.png')}
          style={{
            width: 75,
            objectFit: 'contain',
            position: 'absolute',
            right: 20,
            top: 100,
          }}
        />
      </ScrollView>
    </PageWrapperView>
  );
};

export default Search;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 10,
    height: 230,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  image: {
    width: width - 38,
    height: height * 0.6,
    resizeMode: 'contain',
  },
});
