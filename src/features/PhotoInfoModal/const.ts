import { Exif } from '../../app/service/types';

const PhotoInformation: Array<{ text: string; value: keyof Exif }> = [
  { text: 'Camera Make', value: 'make' },
  { text: 'Camera Model', value: 'model' },
  { text: 'Focal length', value: 'focal_length' },
  { text: 'Aperture', value: 'aperture' },
  { text: 'Shutter speed', value: 'exposure_time' },
  { text: 'ISO', value: 'iso' },
];

export default PhotoInformation;
