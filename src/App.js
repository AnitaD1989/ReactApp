import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';

const App = () => {
  return (
    <div>
      <Hero/>
      <SearchForm/>
      <List/>
      <Container/>
    </div>
  );
};

export default App;
