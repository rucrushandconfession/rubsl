export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-slate-600">{description}</p>
    </section>
  );
}
