import "./Common.css";

function Button({ children, href = "#", variant = "primary" }) {
  return (
    <a href={href} className={`btn ${variant}`}>
      {children}
    </a>
  );
}

export default Button;