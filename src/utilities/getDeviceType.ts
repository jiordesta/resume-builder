import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { DeviceType } from "../libs/enums/devices.enum";

export const getDeviceType = () => {
  if (isMobile) return DeviceType.MOBILE;
  if (isTablet) return DeviceType.TABLET;
  if (isDesktop) return DeviceType.PC;

  return DeviceType.MOBILE;
};
