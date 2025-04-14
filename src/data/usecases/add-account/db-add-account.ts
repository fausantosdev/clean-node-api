import { AddAccount, Encrypter, AddAccountModel, AccountModel, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount{
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor(encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add(data: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(data.password)

    const account = await this.addAccountRepository.add(Object.assign({}, data, { password: hashedPassword }))

    return account
  }
}
