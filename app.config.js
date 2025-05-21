import Config from "./app.json"

const ORG = process.env.APP_ORG ?? 'myorg'
const APP_NAME = Config.expo.name ?? 'Unnamed Config'
const APP_SLUG = Config.expo.slug ?? 'unnamed-app'
const BUNDLE_NAME = `com.${ORG}.${APP_SLUG}`
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';


const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return `${BUNDLE_NAME}.dev`;
  }

  if (IS_PREVIEW) {
    return `${BUNDLE_NAME}.preview`;
  }

  return BUNDLE_NAME
};

const getAppName = () => {
  if (IS_DEV) {
    return `${APP_NAME} (Dev)`;
  }

  if (IS_PREVIEW) {
    return `${APP_NAME} (Preview)`;
  }

  return `${APP_NAME}`;
};



module.exports = ({ config }) => {
  return {
    ...config,
    name: getAppName(),
    ios: {
      ...config.ios,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      ...config.android,
      package: getUniqueIdentifier(),
    },
  };
};