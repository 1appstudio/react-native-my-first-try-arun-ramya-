import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-my-first-try-arun-ramya' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type MyFirstTryArunRamyaProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'MyFirstTryArunRamyaView';

export const MyFirstTryArunRamyaView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<MyFirstTryArunRamyaProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
