// import { useState } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { updateLayout } from "@/store/actions";
import layoutTypes from "@/layout/constants/layoutType";

export default function useLayoutHook() {
    const [layoutType, setLayoutType] = useState(layoutTypes.HORIZONTAL_LAYOUT);
    const layoutState = useSelector((state) => {
        const {
            isSidebarOpened,
            isSidebarOpenedDefault,
            isDrawerOpened,
            isDrawerOpenedDefault,
        } = state.Layout;
        return {
            initialState: state.Layout,
            isSidebarOpened,
            isSidebarOpenedDefault,

            isDrawerOpened,
            isDrawerOpenedDefault,
        };
    });

    // 1. Sidebar Handlers
    function openSidebar() {
        updateLayout({
            ...layoutState.initialState,
            isSidebarOpened: true,
        });
    }
    function closeSidebar() {
        updateLayout({
            ...layoutState.initialState,
            isSidebarOpened: false,
        });
    }
    function setSidebarIsOpenedDefault(isSidebarOpenedDefault) {
        updateLayout({
            ...layoutState.initialState,
            isSidebarOpenedDefault,
        });
    }

    // 2. Drawer Handlers
    function openDrawer() {
        updateLayout({
            ...layoutState.initialState,
            isDrawerOpened: true,
        });
    }
    function closeDrawer() {
        updateLayout({
            ...layoutState.initialState,
            isDrawerOpened: false,
        });
    }
    function setDrawerIsOpenedDefault(isDrawerOpenedDefault) {
        updateLayout({
            ...layoutState.initialState,
            isDrawerOpenedDefault,
        });
    }

    // 3. LayoutType Handlers

    return {
        ...layoutState,
        layoutType,
        setLayoutType,
        openSidebar,
        closeSidebar,
        setSidebarIsOpenedDefault,
        openDrawer,
        closeDrawer,
        setDrawerIsOpenedDefault,
    };
}
