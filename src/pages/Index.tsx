
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import SellerSpotlight from '@/components/SellerSpotlight';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <SellerSpotlight />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
