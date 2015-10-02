const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
const URL_ICON_ADD = 'assets/svg/add.svg';
const URL_ICON_BACK = 'assets/svg/back.svg';
const URL_ICON_CAMERA = 'assets/svg/camera.svg';
const URL_ICON_DELETE   = 'assets/svg/delete.svg';
const URL_ICON_DOWNLOAD    = 'assets/svg/download.svg';
const URL_ICON_DRIVE_DOCUMENT = 'assets/svg/drive_document.svg';
const URL_ICON_DRIVE_SPREADSHEET = 'assets/svg/drive_spreadsheet.svg';
const URL_ICON_GRID    = 'assets/svg/grid.svg';
const URL_ICON_FOLDER    = 'assets/svg/folder.svg';
const URL_ICON_INFO    = 'assets/svg/info.svg';
const URL_ICON_LIST    = 'assets/svg/list.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_MORE    = 'assets/svg/more.svg';
const URL_ICON_PERSON_ADD    = 'assets/svg/person_add.svg';
const URL_ICON_PIN    = 'assets/svg/pin.svg';
const URL_ICON_RECENT    = 'assets/svg/recent.svg';
const URL_ICON_SEARCH    = 'assets/svg/search.svg';
const URL_ICON_SHARE    = 'assets/svg/share.svg';
const URL_ICON_STAR    = 'assets/svg/star.svg';
const URL_ICON_UPLOAD    = 'assets/svg/upload.svg';

// Load the custom app ES6 modules

import FilesController from 'files/FilesController'
import FilesService    from 'files/FilesDataservice'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'files' module" );

// Define the Angular 'files' module

let moduleName = angular
      .module( "files", [ ] )
      .service("filesService"       , FilesService )
      .controller("FilesController" , FilesController )
      .config( ($mdIconProvider) => {


        $log.debug( "Configuring $mdIconProvider" );

        // Register `dashboard` iconset & icons for $mdIcon service lookups

        $mdIconProvider
          .defaultIconSet( URL_AVATAR_ICONS, 128 )
          .icon('back', URL_ICON_BACK, 24)
          .icon('add', URL_ICON_ADD, 24)
          .icon('camera', URL_ICON_CAMERA, 24)
          .icon('delete' ,URL_ICON_DELETE, 24)
          .icon('document', URL_ICON_DRIVE_DOCUMENT, 24)
          .icon('download' ,URL_ICON_DOWNLOAD, 24)
          .icon('folder' ,URL_ICON_FOLDER, 24)
          .icon('grid' ,URL_ICON_GRID, 24)
          .icon('info' ,URL_ICON_INFO, 24)
          .icon('list' ,URL_ICON_LIST, 24)
          .icon('menu' ,URL_ICON_MENU, 24)
          .icon('more' ,URL_ICON_MORE, 24)
          .icon('person_add' ,URL_ICON_PERSON_ADD, 24)
          .icon('pin' ,URL_ICON_PIN, 24)
          .icon('recent' ,URL_ICON_RECENT, 24)
          .icon('search' ,URL_ICON_SEARCH, 24)
          .icon('share' ,URL_ICON_SHARE, 24)
          .icon('spreadsheet', URL_ICON_DRIVE_SPREADSHEET, 24)
          .icon('star' ,URL_ICON_STAR, 24)
          .icon('upload' ,URL_ICON_UPLOAD, 24);

      })
      .name;

export default moduleName;



