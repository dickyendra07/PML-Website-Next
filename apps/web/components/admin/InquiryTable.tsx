import { ProposalSubmission } from "@/lib/admin-api";

type InquiryTableProps = {
  items: ProposalSubmission[];
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function InquiryTable({ items }: InquiryTableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-white/8 text-xs font-black uppercase tracking-[0.14em] text-white/45">
            <tr>
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Company</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Service</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Source</th>
              <th className="px-5 py-4">Date</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/8">
            {items.map((item) => (
              <tr key={item.id} className="text-white/72 transition hover:bg-white/5">
                <td className="px-5 py-4 font-black text-white">{item.name}</td>
                <td className="px-5 py-4">{item.company}</td>
                <td className="px-5 py-4">{item.email}</td>
                <td className="px-5 py-4">{item.serviceType}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full border border-[#039147]/30 bg-[#039147]/15 px-3 py-1 text-xs font-black text-[#76d69f]">
                    {item.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-white/45">{item.sourcePage || "-"}</td>
                <td className="px-5 py-4 text-white/45">{formatDate(item.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
