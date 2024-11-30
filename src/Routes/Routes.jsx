import { createBrowserRouter } from 'react-router-dom'
import Layout from '../mainLayout/Layout';
import AddCoffee from '../components/AddCoffee';
import UpdateCoffee from '../components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/addCoffee',
    element: <AddCoffee />
  },
  {
    path: '/updateCoffee',
    element: <UpdateCoffee />
  }
])

export default router;