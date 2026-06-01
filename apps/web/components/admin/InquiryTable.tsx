import { ProposalSubmission } from "@/lib/admin-api";

type InquiryTableProps = {
  items: ProposalSubmission[];
  onSelect?: (item: ProposalSubmission) => void;
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

function statusClass(status: string) {
  if (status === "SPAM") return "border-red-400/30 bg-red-500/15 text-red-100";
  if (status === "CLOSED") return "border-white/15 bg-white/10 text-white/55";
  if (status === "CONTACTED") return "border-blue-300/30 bg-blue-500/15 text-blue-100";
  if (status === "IN_REVIEW") return "border-yellow-300/30 bg-yellow-500/15 text-yellow-100";
  return "border-[#039147]/30 bg-[#039147]/15 text-[#76d69f]";
}

export default function InquiryTable({ items, onSelect }: InquiryTableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] text-left text-sm">
          <thead className="bg-white/8 text-xs font-black uppercase tracking-[0.14em] text-white/45">
            <tr>
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Company</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Service</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Source</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Action</th>
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
                  <span className={`rounded-full border px-3 py-1 text-xs font-black ${statusClass(item.status)}`}>
                    {item.status.replace("_", " ")}
                  </span>
                </td>
                <td className="px-5 py-4 text-white/45">{item.sourcePage || "-"}</td>
                <td className="px-5 py-4 text-white/45">{formatDate(item.createdAt)}</td>
                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => onSelect?.(item)}
                    className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-black text-white transition hover:bg-[#039147]"
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
