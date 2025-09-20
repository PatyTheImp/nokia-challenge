export function Page({
  className = "", //for additional classes
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const tailwindClasses = "grow m-10";
  return <main className={`${tailwindClasses} ${className}`}>{children}</main>;
}
