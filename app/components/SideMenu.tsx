import MenuItem from "./MenuItem";

export function SideMenu({
  className = "", //for additional classes
}: {
  className?: string;
}) {
  const tailwindClasses = "border-r w-40";
  return (
    <nav className={`${tailwindClasses} ${className}`}>
      <ul>
        <MenuItem text="Home" href="/" />
        <MenuItem text="Tasks" href="/tasks" />
      </ul>
    </nav>
  );
}
