import Loading from '@/components/common/Loading/Loading';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '.';

const StoreProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
