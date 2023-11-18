import useLayoutHook from "@/hooks/useLayoutHook";

function HamburgerTrigger() {
    const { isSidebarOpened, openSidebar, closeSidebar } = useLayoutHook();
    function handleToggle() {
        if (isSidebarOpened) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    return (
        <div className="hamburger" onClick={handleToggle}>
            <span></span>
            <span>Hamburger trigger</span>
            <span></span>
        </div>
    );
}

export default HamburgerTrigger;
