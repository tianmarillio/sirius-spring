import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};

export default App;
