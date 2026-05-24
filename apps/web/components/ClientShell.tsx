"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProposalModal from "./ProposalModal";

type ClientShellProps = {
  children: React.ReactNode;
};

export default function ClientShell({ children }: ClientShellProps) {
  const [proposalOpen, setProposalOpen] = useState(false);

  useEffect(() => {
    const openProposal = () => setProposalOpen(true);

    window.addEventListener("open-proposal-modal", openProposal);

    return () => {
      window.removeEventListener("open-proposal-modal", openProposal);
    };
  }, []);

  return (
    <>
      <Header onOpenProposal={() => setProposalOpen(true)} />
      {children}
      <Footer />
      <ProposalModal open={proposalOpen} onClose={() => setProposalOpen(false)} />
    </>
  );
}
