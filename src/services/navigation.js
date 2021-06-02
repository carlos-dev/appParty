import { CommonActions } from '@react-navigation/native';

let navigator;

export function setNavigator(ref) {
  console.log('ref', ref);
  navigator = ref;
}

export function navigate(routeName, params) {
  console.log('navigate', routeName);
  navigator.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
}
