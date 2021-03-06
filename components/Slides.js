import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

  renderLastSlide = (i) => {
    if (i === this.props.data.length - 1){
      return (
        <Button
          buttonStyle={styles.buttonStyle}
          title="I'm ready!"
          raised
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides = () => {
    return this.props.data.map((slide, i) => {
      return (
        <View
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      )
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  }
})
