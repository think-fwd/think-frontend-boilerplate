export enum OrganizationStatusEnum {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  SETUP = 'SETUP',
}

export enum OrganizationStatusEnumLabel {
  ACTIVE = 'Ativo',
  BLOCKED = 'Bloqueado',
  DRAFT = 'Configurando',
}

export enum OrganizationStatusEnumColor {
  ACTIVE = 'success',
  BLOCKED = 'error',
  DRAFT = 'warning',
}

export type OrganizationStatusEnumKeys = keyof typeof OrganizationStatusEnum
