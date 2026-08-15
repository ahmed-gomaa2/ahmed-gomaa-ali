import "./SectionHeading.css";

function SectionHeading({ children, className = "", label, theme = "dark" }) {
  const headingClassName = `section-heading section-heading--${theme} ${className}`.trim();

  return (
    <div className={headingClassName}>
      <p className="section-heading__label">{label}</p>
      <h2 className="section-heading__title">{children}</h2>
    </div>
  );
}

export default SectionHeading;
