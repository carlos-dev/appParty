import React from 'react';
import { Snackbar } from 'react-native-paper';
import useNetInfo from '../hooks/useNetInfo';

function SnackbarComponent() {
  const netinfo = useNetInfo();
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      visible={!netinfo.isConnected}
      onDismiss={onDismissSnackBar}
      action={{
        label: '',
        onPress: () => {
          // Do something
        },
      }}
    >
      Verefique sua conexão e tente novamente
    </Snackbar>
  );
}

export default SnackbarComponent;
