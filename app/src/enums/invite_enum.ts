export enum InviteEnum {
  ACCEPTED = 'Aceito',
  PENDING = 'Pendente',
  REFUSED = 'Recusado',
}

export enum InviteColorEnum {
  ACCEPTED = '#0BB07C',
  PENDING = '#FFAD0D',
  REFUSED = '#F03D3D',
}

export type StatusEnumKeys = keyof typeof InviteEnum
