import Band from "../bands/Band";

export default function BandList({ bands }) {
  return (
    <section className="Bandlist">
      {bands.map((p) => (
        <Band key={p.name} {...p} />
      ))}
    </section>
  );
}
