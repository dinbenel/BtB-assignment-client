import { useSideMenuStore } from "@/store/sideMenu.store";
import { Sheet, SheetContent } from "../ui/sheet";

const SideMenu = () => {
  const { isOpen, setSideMenuOpen } = useSideMenuStore((state) => ({
    isOpen: state.isOpen,
    setSideMenuOpen: state.setIsOpen,
  }));

  const onOpenSideMenu = (open: boolean) => {
    setSideMenuOpen(open);
  };

  return (
    <div>
      <Sheet onOpenChange={onOpenSideMenu} open={isOpen}>
        <SheetContent>open</SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;