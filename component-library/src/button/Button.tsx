import "./Button.css";

interface Props {
  /**
   * The variant of the button
   **/
  variant: "primary" | "secondary" | "critical";
  /**
   * Children prop
   **/
  children: React.ReactNode;
  /**
   * Click handler
   **/
  onClick?: () => void;
  /**
   * Controls if the button is disabled
   **/
  disabled?: boolean;
}

export default function Button({variant, children, onClick, disabled = false}: Props) {
  return (
    <button
      className={`button ${variant} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
