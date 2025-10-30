import { MenuButton } from "@/components/ui/MenuButton";

type SidebarMenuItem = {
  label: string;
  href: string;
};

type SidebarMenuProps = {
  items: SidebarMenuItem[];
};

export const SidebarMenu = ({ items }: SidebarMenuProps) => {
  return (
    <>
      {items.map((item) => (
        <MenuButton key={item.href} label={item.label} href={item.href} />
      ))}
    </>
  );
};
