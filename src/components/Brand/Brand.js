import "./Brand.css";

function Brand({
  href = "#home",
  label = "Ahmed Gomaa home",
  onClick,
  variant = "",
}) {
  const brandClassName = variant ? `brand brand--${variant}` : "brand";

  return (
    <a
      className={brandClassName}
      href={href}
      onClick={onClick}
      aria-label={label}
    >
      <span className="brand__mark">AG</span>
      <span className="brand__name">Ahmed Gomaa</span>
    </a>
  );
}

export default Brand;
