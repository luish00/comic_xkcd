import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableNativeFeedback,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { ButtonColored, ImageAuto } from '../common';

import { useApiGet, URL_JSON } from '../../hooks/useApi';
import { addFavority, getFavorities, removeFavority } from '../../utils/storage';
import { NOT_FOUND_IMG } from '../../utils/constans';
import { COLORS } from '../../utils';
import { useDoubleClick } from '../../hooks';

import heartImg from '../../../assets/heart-color.png';
import heartOutlineImg from '../../../assets/heart-outline.png';

import styles from './HomeContent.style';

const HomeContent = () => {
  const { width } = useWindowDimensions();
  const [getImge, imgeRequest, isLoading] = useApiGet({});
  const [page, setPage] = useState(-1);
  const [title, setTitle] = useState('CXkcd');
  const [img, setImg] = useState(null);
  const [maxPage, setMaxPage] = useState(2587);
  const [alt, setAlt] = useState('');
  const [favorities, setFavorities] = useState([]);
  const [isZoom, setZoom] = useState(0);

  const [onZoom] = useDoubleClick(() => {
    setZoom((prev) => !prev);
  });

  useEffect(() => {
    const loadFavorities = async () => {
      const lastFavorities = await getFavorities();

      setFavorities(lastFavorities.map((item) => item.page));
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

      setZoom(false);
      setTitle(data.safe_title);
      setImg(data.img);
      setAlt(data.alt);
      setPage(data.num);
    }

    if (imgeRequest?.status === 500) {
      setImg(NOT_FOUND_IMG);
      ToastAndroid.show('Houston we have a problem', ToastAndroid.SHORT)
    }
  }, [imgeRequest, isLoading, page]);

  const onRandom = useCallback(() => {
    if (isLoading) return;

    const random = Math.floor(Math.random() * maxPage) + 1

    getImge({ url: `${random}/${URL_JSON}` });
  }, [maxPage]);

  const onNext = useCallback(() => {
    if (isLoading || page >= maxPage) return;

    getImge({ url: `${page + 1}/${URL_JSON}` });
  }, [page, maxPage]);

  const onPrev = useCallback(() => {
    if (isLoading || page <= 1) return;

    getImge({ url: `${page - 1}/${URL_JSON}` });
  }, [page, maxPage]);

  const isFavority = useMemo(() => {
    return !!favorities.some((item) => item === page);
  }, [favorities, page]);

  const handleAddFavority = useCallback(() => {
    if (isLoading || page <= -1) return;

    if (isFavority) {
      removeFavority(page);
      setFavorities((prev) => prev.filter((item) => item !== page));
    } else {
      addFavority({ page, img, title });
      setFavorities((prev) => [...new Set([page, ...prev])]);
    }
  }, [isFavority, isLoading, page]);

  const imgSize = useMemo(() => {
    let size = { width: width - 40 };

    if (isZoom) {
      size = { width: width * 2, height: 500 };
    }

    return size;
  }, [isLoading, isZoom]);

  return (
    <View style={styles.relative}>
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

      <ScrollView style={styles.container} nestedScrollEnabled>
        <View>
          <View style={styles.flex1}>
            <ScrollView horizontal={!isLoading}>
              <View style={styles.imageContainer}>
                {isLoading && (
                  <View style={styles.loading}>
                    <ActivityIndicator size='large' color={COLORS.ColorAccent} />
                  </View>
                )}

                <TouchableOpacity onPress={onZoom}>
                  <ImageAuto style={[imgSize, styles.image]} uri={img} />
                </TouchableOpacity>
              </View>
            </ScrollView>

            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                {alt}
              </Text>

              <Text style={styles.pageCount}>
                {page}/{maxPage}
              </Text>
            </View>
          </View>
        </View >
      </ScrollView >
    </View>
  );
}

export { HomeContent };
