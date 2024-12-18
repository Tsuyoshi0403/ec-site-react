/**
 * 端末の種別
 */
export const DeviceKind = {
  /** Web */
  WEB: 3,
} as const

export type DeviceKindType = (typeof DeviceKind)[keyof typeof DeviceKind]
