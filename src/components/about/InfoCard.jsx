function InfoCard({ icon, title, description }) {
  return (
    <article className="card" aria-label={title}>
      <div className="icon" aria-hidden="true">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default InfoCard;