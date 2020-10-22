import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0155546Navigator from '../features/BlankScreen0155546/navigator';
import Maps155528Navigator from '../features/Maps155528/navigator';
import Add-Item155527Navigator from '../features/Add-Item155527/navigator';
import Maps155523Navigator from '../features/Maps155523/navigator';
import UserProfile155519Navigator from '../features/UserProfile155519/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0155546: { screen: BlankScreen0155546Navigator },
Maps155528: { screen: Maps155528Navigator },
Add-Item155527: { screen: Add-Item155527Navigator },
Maps155523: { screen: Maps155523Navigator },
UserProfile155519: { screen: UserProfile155519Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
