import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import PageWrapperView from '../components/PageWrapperView';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {globalStyle} from '../globalStyle/globalStyle';
import {categoryData} from '../data';

const Home = () => {
  return (
    <PageWrapperView barColor={'#995BFF'}>
      <LinearGradient
        colors={['#995BFF', '#be9fff', '#eae0ff']}
        style={styles.linearGradient}>
        <View style={globalStyle.flex}>
          <Feather name="menu" size={30} color="#fff" />
          <Image
            source={require('../assets/home/logo.png')}
            style={{width: 65, height: 35, objectFit: 'contain'}}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 110,
            width: 320,
          }}>
          <View
            style={{
              backgroundColor: '#edffce',
              borderRadius: 20,
              borderBottomLeftRadius: 0,
              paddingBottom:10
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
              }}>
              <View style={{paddingTop: 10}}>
                <Text style={{color: '#000'}}>Welcome,</Text>
                <Text style={{fontSize: 26, color: '#000'}}>Find Your</Text>
                <Text style={{fontSize: 26, color: '#000'}}>Dream Sector!</Text>
              </View>
              <Image
                source={require('../assets/home/rounde.png')}
                style={{width: 102, height: 72, objectFit: 'contain'}}
              />
            </View>
            <View style={{padding: 10}}>
              <View
                style={[
                  globalStyle.center,
                  {
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  },
                ]}>
                <Feather name="search" color="#ff8a00" size={26} />
                <TextInput style={{}} placeholder="What are you looking for?" />
              </View>
            </View>
          </View>
          <View style={{backgroundColor: '#edffce',width:60,height:50}}/>
        </View>
      </LinearGradient>
      <View
        style={[
          globalStyle.flex,
          {
            marginTop: 90,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            borderTopLeftRadius: 40,
            paddingTop: 20,
          },
        ]}>
        <Text style={{color: '#000', fontSize: 26, fontWeight: 'bold'}}>
          Explore Catagories
        </Text>
        <Entypo name="dots-three-horizontal" size={20} color="#000" />
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 10}}>
        {categoryData.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              {
                borderColor: item.colors[2],
              },
            ]}>
            <LinearGradient
              colors={item.colors}
              start={{x: 0, y: 0}} // Gradient starts from the left
              end={{x: 1, y: 0}}
              key={index}
              style={[
                globalStyle.center,
                {
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                },
              ]}>
              <Image
                source={item.icon}
                style={{width: 35, height: 35, objectFit: 'contain'}}
              />
              <Text style={{fontSize: 17, color: '#333333'}}>{item.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[globalStyle.flex, {padding: 10}]}>
        <Text style={{color: '#000', fontSize: 26, fontWeight: 'bold'}}>
          Popular Sectors
        </Text>
        <Entypo name="dots-three-horizontal" size={20} color="#000" />
      </View>
      <View
        style={[
          globalStyle.flex,
          {width: Dimensions.get('window').width, paddingHorizontal: 10},
        ]}>
        <TouchableOpacity>
          <Image
            source={require('../assets/home/home-services.png')}
            style={{
              width: Dimensions.get('window').width / 2.2,
              height: 170,
              objectFit: 'contain',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/home/healthcare.png')}
            style={{
              width: Dimensions.get('window').width / 2.2,
              height: 170,
              objectFit: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={[globalStyle.flex, {padding: 10}]}>
        <Text style={{color: '#000', fontSize: 24, fontWeight: 'bold'}}>
          Recommended For You
        </Text>
        <Entypo name="dots-three-horizontal" size={20} color="#000" />
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            backgroundColor: '#F6F4FF',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 15,
          }}>
          <Image
            source={require('../assets/home/corner-3.png')}
            style={{
              width: 57,
              height: 57,
              objectFit: 'contain',
              position: 'absolute',
              left: 0,
              bottom: -12,
            }}
          />
          <Image
            source={require('../assets/home/corner-4.png')}
            style={{
              width: 50,
              height: 50,
              objectFit: 'contain',
              position: 'absolute',
              left: -0,
              bottom: -10,
            }}
          />
          <View style={globalStyle.center}>
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#FFC5C5',
                borderRadius: 10,
              }}
            />
            <View
              style={{
                height: 100,
                paddingLeft: 10,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#060047',
                  width: 230,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Now share the Construction Sectors with your anyone and can save
                it as bookmark
              </Text>
              <View style={globalStyle.flex}>
                <Text style={{color: '#060047'}}>Updated | 06:30 AM</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#865DFF',
                    paddingHorizontal: 18,
                    borderRadius: 15,
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
                    Explore
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Image
            source={require('../assets/home/corner-1.png')}
            style={{
              width: 72,
              height: 72,
              objectFit: 'contain',
              position: 'absolute',
              right: 0,
            }}
          />
          <Image
            source={require('../assets/home/corner-2.png')}
            style={{
              width: 85,
              height: 85,
              objectFit: 'contain',
              position: 'absolute',
              right: -20,
              top: 0,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F6F4FF',
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../assets/home/corner-3.png')}
            style={{
              width: 57,
              height: 57,
              objectFit: 'contain',
              position: 'absolute',
              left: 0,
              bottom: -12,
            }}
          />
          <Image
            source={require('../assets/home/corner-4.png')}
            style={{
              width: 50,
              height: 50,
              objectFit: 'contain',
              position: 'absolute',
              left: -0,
              bottom: -10,
            }}
          />
          <View style={globalStyle.center}>
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: '#FFC5C5',
                borderRadius: 10,
              }}
            />
            <View
              style={{
                height: 100,
                paddingLeft: 10,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#060047',
                  width: 230,
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Now share the Construction Sectors with your anyone and can save
                it as bookmark
              </Text>
              <View style={globalStyle.flex}>
                <Text style={{color: '#060047'}}>Updated | 06:30 AM</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#865DFF',
                    paddingHorizontal: 18,
                    borderRadius: 15,
                    paddingVertical: 5,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
                    Explore
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Image
            source={require('../assets/home/corner-1.png')}
            style={{
              width: 72,
              height: 72,
              objectFit: 'contain',
              position: 'absolute',
              right: 0,
            }}
          />
          <Image
            source={require('../assets/home/corner-2.png')}
            style={{
              width: 85,
              height: 85,
              objectFit: 'contain',
              position: 'absolute',
              right: -20,
              top: 0,
            }}
          />
        </View>
      </View>
    </PageWrapperView>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingVertical: 10,
    height: 200,
    borderBottomRightRadius: 65,
  },
  categoryButton: {
    marginTop: 10,
    borderWidth: 0.7,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 5,
  },
});
