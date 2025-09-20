export function Main({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const tailwindClasses = "grow columns-2 flex";
  return <div className={`${tailwindClasses} ${className}`}>{children}</div>;
}
