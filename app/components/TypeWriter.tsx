import React, { useState, useEffect } from 'react';
import { Text, TextStyle } from 'react-native';

interface TypeWriterProps {
  text: string;
  style?: TextStyle;
  delay?: number;
}

export default function TypeWriter({ text, style, delay = 100 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <Text style={style}>{displayedText}</Text>;
} 