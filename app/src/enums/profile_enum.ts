export enum ProfileEnum {
  admin = 'Administrador',
  organization = 'Organização',
}

export type ProfileEnumKeys = keyof typeof ProfileEnum
