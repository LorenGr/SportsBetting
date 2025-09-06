import { BetProvider } from './contexts/BetContextProvider';
import Layout from './components/Layout/Layout';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import OddsList from './components/OddsList/OddsList';
import BetSlip from './components/BetSlip/BetSlip';

function AppContent() {
  return (
    <Layout>
      <div className="col">
        <Breadcrumb />
        <OddsList />
      </div>
      <div className="col">
        <BetSlip />
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <BetProvider>
      <AppContent />
    </BetProvider>
  );
}
