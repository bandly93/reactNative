import HomeScreen from '../screens/HomeScreen';
import StarredScreen from '../screens/StarredScreen';
import SharedScreen from '../screens/SharedScreen';
import FilesScreen from '../screens/FilesScreen';

export const navListData = [
    {
      component : HomeScreen,
      name : 'Home',
      iosIconName : 'ios-home',
      otherIconName : 'ios-home',
    },
    {
      component : StarredScreen,
      name : 'Starred',
      iosIconName : 'ios-star-outline',
      otherIconName : 'ios-star-outline',
    },
    {
      component : SharedScreen,
      name :'Shared',
      iosIconName : 'ios-people',
      otherIconName : 'ios-people',
    },
    {
      component : FilesScreen,
      name :'Files',
      iosIconName : 'ios-folder',
      otherIconName : 'ios-folder',
    }
];