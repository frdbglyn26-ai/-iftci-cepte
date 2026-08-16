import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import CropDetailPage from '@/pages/CropDetailPage';
import GuidePage from '@/pages/GuidePage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/urunler" element={<ProductsPage />} />
            <Route path="/urun/:id" element={<CropDetailPage />} />
            <Route path="/tarim-rehberi" element={<GuidePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
