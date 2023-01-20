import Container from 'react-bootstrap/Container';
import Body from './Body';
import Header from './Header';
import ErrorModal from './ErrorModal';

// Komponent v react eto funkcqja kotoraja vozvrashajet react element ispolzuja JSX.
// JSX eto novyj sinteksis ot react kotoryj pozvoljajet pisat' html i js udobnej/vmeste.
// Komponent dolzhen vozvrashjat tolko odin react element.
// Vse nazvanija komponentov v react vsegda dolzhq nachinatsja s Zaglavnoj bukvoj - eto dlja togo chtoby 
// razlichjat' html ot komponentov.

function App() {
  console.log('App');
  return (
    <Container>
      <Header />
      <Body />
      <ErrorModal />
    </Container>
  );
}

export default App;
