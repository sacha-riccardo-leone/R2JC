import { ReworkPlaceholder } from "@/components/ReworkPlaceholder";

export const metadata = { title: "Édition 01 — R2JC Reworked" };

// Upgraded /editions/01 doesn't have a dedicated page yet — the magazine
// cover on /editions points there but it 404s. Link the placeholder back
// to the Upgraded /editions index instead so the visitor isn't stranded.
export default function ReworkedEdition01() {
  return <ReworkPlaceholder section="Édition 01" upgradedHref="/editions" />;
}
