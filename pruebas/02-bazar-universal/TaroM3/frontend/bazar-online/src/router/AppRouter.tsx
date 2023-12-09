import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ItemList from '../components/pages/itemList/ItemList';
import ItemDetail from '../components/pages/itemDetail/ItemDetail';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Hello World</h1>} />
      
      <Route element={<Layout />}>
        <Route path='/items' element={<ItemList />} />
        <Route path='/items/:id' element={<ItemDetail />} />
        <Route path='*' element={<h1> 404 - Not Found </h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
