import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2458957244369095/2063114454';

const BannerAdCustom = () => (
  <BannerAd
    unitId={adUnitId}
    size={BannerAdSize.ADAPTIVE_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
  />
);

export { BannerAdCustom };
