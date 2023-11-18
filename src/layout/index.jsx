import { createContext } from "react";

import useLayoutHook from "@/hooks/useLayoutHook";
import layoutTypes from "@/layout/constants/layoutType";
import Sidebar from "@/components/sidebar";

import HorizontalLayout from "./components/horizontalLayout";
import VerticalLayout from "./components/verticalLayout";
import TwoColumnsLayout from "./components/twoColumnsLayout";

import sidebarData from "./constants/sidebarData";

const LayoutContext = createContext();

function LayoutContainer({ children }) {
    const layoutState = useLayoutHook();

    const { layoutType } = layoutState;

    return (
        <LayoutContext.Provider value={layoutState}>
            {layoutType === layoutTypes.HORIZONTAL_LAYOUT && (
                <HorizontalLayout
                    sidebarComponent={<Sidebar menu={sidebarData}></Sidebar>}
                    contentComponent={children}
                ></HorizontalLayout>
            )}
            {layoutType === layoutTypes.VERTICAL_LAYOUT && (
                <VerticalLayout></VerticalLayout>
            )}
            {layoutType === layoutTypes.TWO_COLOUMN_LAYOUT && (
                <TwoColumnsLayout></TwoColumnsLayout>
            )}
        </LayoutContext.Provider>
    );
}

export default LayoutContainer;
