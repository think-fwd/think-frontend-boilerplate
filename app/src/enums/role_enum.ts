export enum RoleEnum {
  ADMIN = 'Gestão',
  EDITOR = 'Edição',
  VIEWER = 'Visualização',
}

export type RoleEnumKeys = keyof typeof RoleEnum
