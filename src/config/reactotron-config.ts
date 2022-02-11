import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import AsyncStorage from '@react-native-community/async-storage';

const tron = Reactotron;

if(__DEV__) {
  tron
  .setAsyncStorageHandler!(AsyncStorage)
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .useReactNative()
  .connect()

}

export default tron;

