export function normalize(size: number, factor: number = 1) {
  const Dimensions = require('react-native/index').Dimensions;
  const PixelRatio = require('react-native/index').PixelRatio;
  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  let scale;
  if (SCREEN_HEIGHT > SCREEN_WIDTH) {
    scale = SCREEN_HEIGHT / 800;
  } else {
    scale = SCREEN_WIDTH / 800;
  }
  const newSize = size * (scale * factor);
  return PixelRatio.roundToNearestPixel(newSize) - 1;
}
