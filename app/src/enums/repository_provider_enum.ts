export enum RepositoryProviderEnum {
  bitbucket = 'bitbucket',
  gitlab = 'gitlab',
  github = 'github',
}

export enum RepositoryLabelEnum {
  bitbucket = 'Bitbucket',
  gitlab = 'GitLab',
  github = 'Github',
}

export type RepositoryProviderEnumKeys = keyof typeof RepositoryProviderEnum
