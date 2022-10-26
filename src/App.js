import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Route';

function App() {
  return (
    <section>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </section>
  );
}

export default App;
