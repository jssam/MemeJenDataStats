import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import home from "./src/screens/home";
import uploadimage from "./src/screens/uploadimage";
import showmeme from "./src/screens/showmeme";
import uploadimagetypesecond from "./src/screens/uploadimagetypesecond";
import editMeme from "./src/screens/editMeme";
import editMemesec from "./src/screens/editMemesec";
import all from "./src/screens/allmeme";
import Activity from "./src/screens/activity";
import horizocon from "./src/screens/horizoncon";
import vericon from "./src/screens/vericon";
import allprocessed from "./src/screens/allprocessed";
import splash from "./src/screens/splash";
import star from "./src/screens/star";
import showstarmeme from "./src/screens/showstarmeme";





const App = createStackNavigator({
  Splash: {
    screen: splash, navigationOptions: {
      header: () => null
    }
  },
  Home: {
    screen: home, navigationOptions: {
      header: () => null
    }
  },
  Superstar: {
    screen: star
  },
  Home1: {
    screen: editMeme, navigationOptions: {
      header: () => null
    }
  }
  ,
  both: {
    screen: editMemesec, navigationOptions: {
      header: () => null
    }
  }

  ,
  All: {
    screen: all
  },
  Allprocessed: {
    screen: allprocessed
  },



  Uploadboth: {
    screen: uploadimagetypesecond
  }, uploadtop: {
    screen: uploadimage
  }, Horizontal: {
    screen: horizocon
  }, Vertical: {
    screen: vericon
  },
  Memestar: {
    screen: showstarmeme
  },
  Meme: {
    screen: showmeme
  }


}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }

});

export default createAppContainer(App);