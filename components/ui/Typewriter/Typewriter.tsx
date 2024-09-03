import { useState, useEffect } from 'react';
import { StyleProp, Text, TextStyle } from "react-native";

type TypewriterProps = {
    text: string;
    delay?: number;
    style?: StyleProp<TextStyle>;
    children?: React.ReactNode
}

export function Typewriter({ text, delay = 100, style, children }: TypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <Text style={style}>{currentText} {children}</Text>;
};