import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngDialog from 'ng-dialog';
import ngAria from 'angular-aria';
import ngFileUpload from 'ng-file-upload';
import dragdrop from './dragdrop.module';

// css
import './stylesheets/main.scss';

// services
import Utils from './utils';
import Auth from './auth';
import CsvService from './services/csvService';
import FirebaseService from './services/firebaseService';
import ImportExportService from './services/importExportService';
import ModalService from './services/modalService';
import VoteService from './services/voteService';

// directives
import about from './directives/about';
import focus from './directives/autofocus';
import boardContext from './directives/boardContext';
import dialogs from './directives/dialogs';
import enterClick from './directives/enterClick';
import pageHeader from './directives/header';
import mainContent from './directives/mainContent';
import mainPage from './directives/mainPage';
import menu from './directives/menu';
import sidebar from './directives/sidebar';
import spinner from './directives/spinner';

// controllers
import MainCtrl from './mainController';
import MessageCtrl from './messageController';

// constants
import FEATURES from './features';
const MODULE_NAME = 'app';

let module = angular.module(MODULE_NAME, [
    ngDialog,
    dragdrop,
    ngSanitize,
    ngAria,
    ngFileUpload
]);
module.constant('FEATURES', FEATURES);

// load controllers
module.controller('MainCtrl', MainCtrl);
module.controller('MessageCtrl', MessageCtrl);

// load directives
module.directive('about', about);
module.directive('focus', focus);
module.directive('boardContext', boardContext);
module.directive('dialogs', dialogs);
module.directive('enterClick', enterClick);
module.directive('pageHeader', pageHeader);
module.directive('mainContent', mainContent);
module.directive('mainPage', mainPage);
module.directive('menu', menu);
module.directive('sidebar', sidebar);
module.directive('spinner', spinner);

// load services
module.service('Utils', Utils);
module.service('Auth', Auth);
module.service('FirebaseService', FirebaseService);
module.service('ModalService', ModalService);
module.service('CsvService', CsvService);
module.service('ImportExportService', ImportExportService);
module.service('VoteService', VoteService);

export default MODULE_NAME;
