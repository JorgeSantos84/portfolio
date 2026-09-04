import { useEffect } from 'react';
import Hero from '../components/Hero';
import MainJobDescription from '../components/MainJobDescription';

function MainPage() {
  // Scroll to the element with the ID from the URL hash when the component mounts - example: /#work
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
  return (
    <>
      <Hero />
      <MainJobDescription />
    </>
  );
}

export default MainPage;
