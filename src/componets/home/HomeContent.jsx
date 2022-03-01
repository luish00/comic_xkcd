import React, { useCallback, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  useWindowDimensions,
  View
} from 'react-native';

import { ButtonColored } from '../common/ButtonColored';

import { useApiGet } from '../../hooks/useApi';

import styles from './HomeContent.style';

const URL_JSON = 'info.0.json';

const HomeContent = () => {
  const { width } = useWindowDimensions();
  const [getImge, imgeRequest, isLoading] = useApiGet({});
  const [page, setPage] = useState(-1);
  const [title, setTitle] = useState('CXkcd');
  const [img, setImg] = useState(null);
  const [maxPage, setMaxPage] = useState(2587);

  useEffect(() => {
    getImge({ url: URL_JSON });
  }, []);


  useEffect(() => {
    if (isLoading && !imgeRequest) return;

    if (imgeRequest?.isValid) {
      const { data } = imgeRequest;

      if (page === -1) {
        setMaxPage(data.num);
      }

      setTitle(data.safe_title);
      setImg(data.img);
      setPage(data.num);
    }

    if (imgeRequest?.status === 500) {
      ToastAndroid.show('Houston we have a problem', ToastAndroid.SHORT)
    }
  }, [imgeRequest, isLoading, page]);

  function onClick() {

  }

  const onRandom = useCallback(() => {
    const random = Math.floor(Math.random() * maxPage) + 1

    getImge({ url: `${random}/${URL_JSON}` });
  }, [maxPage]);

  const onNext = useCallback(() => {
    if (page >= maxPage) return;

    getImge({ url: `${page + 1}/${URL_JSON}` });
  }, [page, maxPage]);

  const onPrev = useCallback(() => {
    if (page <= 1) return;

    getImge({ url: `${page - 1}/${URL_JSON}` });
  }, [page, maxPage]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.buttons}>
          <ButtonColored label='<' onPress={onPrev} />

          <ButtonColored label='random' onPress={onRandom} />

          <ButtonColored label='>' onPress={onNext} />
        </View>

        <View style={styles.flex1}>
          <Image style={[{ width: width - 40 }, styles.image]} source={{ uri: img }} />
        </View>
      </View>
    </ScrollView>
  );
}

export { HomeContent };
