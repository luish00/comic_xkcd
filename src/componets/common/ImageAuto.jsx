import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions } from 'react-native';

const ImageAuto = ({ uri, style, defaultHeigth = 500 }) => {
  const { width } = useWindowDimensions();

  const [height, setHeight] = useState(defaultHeigth);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded || !uri) return;

    Image.getSize(uri, (loadWidth, loadHeigth) => {
      const scaleFactor = loadWidth / width
      const imageHeight = loadHeigth / scaleFactor

      setHeight(imageHeight);
      setLoaded(true);
    });
  }, [uri, isLoaded]);

  return (
    <Image source={{ uri }} style={[{ height }, style]} />
  );
};

export { ImageAuto }
