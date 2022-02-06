import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { drawerContentStyle, mobileDrawerStyle } from "../styles/globalStyle";

export const MobileDrawer = ({ rest, children, isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose} {...mobileDrawerStyle} {...rest}>
    <DrawerOverlay />
    <DrawerContent {...drawerContentStyle}>
      <DrawerBody>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
)