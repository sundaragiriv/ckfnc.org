import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="min-h-screen bg-earth text-text font-body">
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;