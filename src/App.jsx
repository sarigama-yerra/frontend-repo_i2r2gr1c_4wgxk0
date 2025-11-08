import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PostsPreview from "./components/PostsPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PostsPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
