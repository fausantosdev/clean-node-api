import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly accountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, accountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.accountRepository = accountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)

    await this.accountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))

    let model: AccountModel

    return new Promise(resolve => resolve(model))
  }
}
