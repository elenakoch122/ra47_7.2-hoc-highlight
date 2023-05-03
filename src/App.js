import './App.css';
import List from './components/List';
import { videoes } from './videoes';

export default function App() {
  return (
    <List list={videoes} />
  );
}
