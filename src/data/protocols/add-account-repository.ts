import { AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account-model'

export interface AddAccountRepository {
  add: (data: AddAccountModel) => Promise<AccountModel>
}
