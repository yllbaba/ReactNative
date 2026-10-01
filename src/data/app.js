import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function App() {
  const [birdBottom, setBirdBottom] = useState(300);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + 300
  );

  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(-100);
  const [obstaclesHeightTwo, setObstaclesHeightTwo] = useState(-100);

  let obstaclesTimerId;
  let obstaclesTimerIdTwo;

  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      }, 30);

      return () => {
        clearInterval(obstaclesTimerId);
      };
    } else {
      setScore(score => score + 1);
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);

  useEffect(() => {
    if (obstaclesLeftTwo > -60) {
      obstaclesTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5);
      }, 30);

      return () => {
        clearInterval(obstaclesTimerIdTwo);
      };
    } else {
      setScore(score => score + 1);
      setObstaclesLeftTwo(screenWidth);
      setObstaclesHeightTwo(-Math.random() * 100);
    }
  }, [obstaclesLeftTwo]);

  const jump = () => {
    if (!isGameOver && birdBottom < screenHeight) {
      setBirdBottom(birdBottom => birdBottom + 50);
      console.log('jump');
    }
  };
}