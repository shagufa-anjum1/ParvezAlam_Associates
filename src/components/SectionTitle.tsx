interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {badge && (
        <div className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
          {badge}
        </div>
      )}
      <div className={`gold-divider ${center ? "mx-auto" : ""}`} />
      <h2 className="section-title">
        {title}{" "}
        {highlight && <span className="text-gold-400">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`text-gray-400 max-w-2xl mt-4 ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
