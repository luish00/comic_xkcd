import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  useWindowDimensions,
  View,
  TouchableNativeFeedback
} from 'react-native';

import { ButtonColored } from '../common/ButtonColored';

import { useApiGet } from '../../hooks/useApi';

import heartImg from '../../../assets/heart-color.png';
import heartOutlineImg from '../../../assets/heart-outline.png';

import styles from './HomeContent.style';
import { addFavority, getFavorities, removeFavority } from '../../utils/storage';

const URL_JSON = 'info.0.json';

const HomeContent = () => {
  const { width } = useWindowDimensions();
  const [getImge, imgeRequest, isLoading] = useApiGet({});
  const [page, setPage] = useState(-1);
  const [title, setTitle] = useState('CXkcd');
  const [img, setImg] = useState(null);
  const [maxPage, setMaxPage] = useState(2587);
  const [alt, setAlt] = useState('');
  const [favorities, setFavorities] = useState([]);

  useEffect(() => {
    const loadFavorities = async () => {
      const lastFavorities = await getFavorities();

      setFavorities(lastFavorities);
    };

    loadFavorities();
  }, [])

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
      setAlt(data.alt);
      setPage(data.num);
    }

    if (imgeRequest?.status === 500) {
      ToastAndroid.show('Houston we have a problem', ToastAndroid.SHORT)
    }
  }, [imgeRequest, isLoading, page]);

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

  const isFavority = useMemo(() => {
    return !!favorities.some((item) => item === page);
  }, [favorities, page]);

  const handleAddFavority = useCallback(() => {
    if (isLoading || page <= -1) return

    if (isFavority) {
      removeFavority(page);
      setFavorities((prev) => prev.filter((item) => item !== page));
    } else {
      addFavority(page);
      setFavorities((prev) => [...new Set([page, ...prev])]);
    }

  }, [isFavority, isLoading, page]);


  return (
    <ScrollView>
      <View>
        <View style={styles.title}>
          <Text ellipsizeMode='clip' numberOfLines={1} style={styles.titleText}>{title}</Text>

          <TouchableNativeFeedback onPress={handleAddFavority}>
            <Image
              source={isFavority ? heartImg : heartOutlineImg}
              style={styles.headerImagen}
              tintColor='#fff'
            />
          </TouchableNativeFeedback>
        </View>

        <View style={styles.buttons}>
          <ButtonColored label='<' onPress={onPrev} />

          <ButtonColored label='random' onPress={onRandom} />

          <ButtonColored label='>' onPress={onNext} />
        </View>

        <View style={styles.flex1}>
          <Image style={[{ width: width - 40 }, styles.image]} source={{ uri: img }} />

          <Text style={{ padding: 20, color: '#000' }}>
            {alt}
          </Text>

          <Text style={{ textAlign: 'center', paddingHorizontal: 20 }}>
            {page}/{maxPage}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export { HomeContent };
