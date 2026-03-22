import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  to,
  onClick,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`;

  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
