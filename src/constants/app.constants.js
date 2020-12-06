import _ from 'lodash';

/**
 * build version of application.
 */
let APP_BUILD_VERSION = 'v1';

/**
 * update APP_BUILD_VERSION.
 */
export function updateAppBuildVersion(buildVersion) {
  if(!_.isEmpty(buildVersion)) {
    APP_BUILD_VERSION = buildVersion;
  }
}

export { APP_BUILD_VERSION };

/**
 * Default (fallback) theme for the application
 */
export const DEFAULT_THEME = {
  PRIMARY_COLOR: '#bf5e30',
  SECONDARY_COLOR: '#6c757d',
  FOREGROUND_COLOR: '#ffffff',
  GENERIC_COLOR: '#000000'
};

/**
 * common constantants of application
 */
export const APP_COMMON_CONSTANTS = {
  AUTH_INFO: 'AUTH_INFO',
  SELECTED_ACC_HOLDER: 'SELECTED_ACC_HOLDER',
  USER_ROLES: 'USER_ROLES',
  PREFERRED_LANGUAGE: 'PREFERRED_LANGUAGE'
};


/**
 * implemented supported language.
 */
let SUPPORTED_LANGUAGES = [
  {
    __comment__: 'English Language',
    lng: 'en',
    name: 'English'
  }
];

/**
 * update SUPPORTED_LANGUAGES list.
 */
export function updateSupportedLanguages(languages) {
  if(_.isObject(languages) && !_.isEmpty(languages)) {
    SUPPORTED_LANGUAGES = languages;
  }
}

export { SUPPORTED_LANGUAGES };

export const DEFAULT_LANG = 'en';
