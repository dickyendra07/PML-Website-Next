type AdminStateProps = {
  title: string;
  description: string;
  tone?: "default" | "error";
};

export default function AdminState({ title, description, tone = "default" }: AdminStateProps) {
  return (
    <div
      className={`rounded-[28px] border p-8 text-center ${
        tone === "error"
          ? "border-red-500/20 bg-red-500/10 text-red-100"
          : "border-black/5 bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-black">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-black/55">
        {description}
      </p>
    </div>
  );
}
