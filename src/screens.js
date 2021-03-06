import {Navigation} from 'react-native-navigation';
import AuthLoading from './AuthLoading';
import {SCREEN} from './routNames';
import Test from './Test';

export function registerScreens() {
    Navigation.registerComponent(SCREEN.AUTH_LOADING, () => AuthLoading);
    Navigation.registerComponent(SCREEN.LOGIN, () => Test);
    Navigation.registerComponent(SCREEN.SIGN_UP, () => Test);
    Navigation.registerComponent(SCREEN.FORGOT_PASSWORD, () => Test);
    Navigation.registerComponent(SCREEN.HOME_TAB, () => Test);
    Navigation.registerComponent(SCREEN.SEARCH_TAB, () => Test);
    Navigation.registerComponent(SCREEN.ACCOUNT_TAB, () => Test);
    Navigation.registerComponent(SCREEN.SETTINGS_TAB, () => Test);
}
