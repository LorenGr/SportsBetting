"use client";

import { BetProvider } from './contexts/BetContextProvider';
import Layout from './components/Layout/Layout';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import OddsList from './components/OddsList/OddsList';
import BetSlip from './components/BetSlip/BetSlip';
import MobileTabs from './components/MobileTabs/MobileTabs';
import { useIsMobile } from './hooks/useIsMobile';

function AppContent() {
  const isMobile = useIsMobile(768);
  if (isMobile) {
    return (
      <Layout>
        <div className="col">
          <Breadcrumb />
          <MobileTabs odds={<OddsList />} slip={<BetSlip />} />
        </div>
      </Layout>
    );
  }
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
