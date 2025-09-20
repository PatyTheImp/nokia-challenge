export function Header({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const tailwindClasses = "h-30 border-b place-content-around";
  return (
    <header className={`${tailwindClasses} ${className}`}>{children}</header>
  );
}
