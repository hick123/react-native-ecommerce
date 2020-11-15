import React from 'react';
import {
  StyleSheet,
  Image,
  Animated,
  Text,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
const {width} = Dimensions.get('window');
const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

const height = width * 0.7;

const Carousel = () => {
  const data = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      title: 'something',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
      title: 'something',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1532795986-dbef1643a596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      title: 'something',
    },
  ];

  const [active, setActive] = React.useState(0);

  const handleScroll = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={{height, width}}>
      <AnimatedScrollview
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={{height, width}}>
        {data.map((cv, i) => (
          <Image
            key={i}
            source={{
              uri: cv.imageUrl,
            }}
            style={styles.image}
          />
        ))}
      </AnimatedScrollview>
      <View style={styles.pagination}>
        {data.map((cv, i) => (
          <Text
            key={i}
            style={
              i === active ? styles.paginationActiveText : styles.paginationText
            }>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: height,
    width: width,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    // position: 'absolute',
    // bottom: 0,
    alignSelf: 'center',
  },
  paginationText: {
    margin: 3,
    fontSize: 16,
    color: '#aaaaaa',
  },
  paginationActiveText: {
    margin: 3,
    fontSize: 16,
    color: '#000',
  },
});
export default Carousel;
