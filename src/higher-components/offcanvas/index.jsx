import useLayoutHook from "@/hooks/useLayoutHook";
import { Drawer } from "antd";

function OffcanvasContainer() {
    const { isDrawerOpened } = useLayoutHook();

    return (
        <Drawer>
            <h2>Drawer Container</h2>
        </Drawer>
    );
}

export default OffcanvasContainer;
