import { Transfer } from '../generated/Dollar/Dollar';
import { Account } from '../generated/schema';

// export function handleNewGravatar(event: NewGravatar): void {
//   let gravatar = new Gravatar(event.params.id.toHex())
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }

export function handleDollarTransfer(event: Transfer): void {
  // let id = event.params.id.toHex();
  let from = event.params.from.toHex();
  let to = event.params.to.toHex();
  let value = event.params.value;
  // let gravatar = Gravatar.load(id);
  // if (gravatar == null) {
  //   gravatar = new Gravatar(id);
  // }
  // gravatar.owner = event.params.owner;
  // gravatar.displayName = event.params.displayName;
  // gravatar.imageUrl = event.params.imageUrl;
  // gravatar.save();
  let fromAccount = Account.load(from);
  if (fromAccount == null) {
    fromAccount = new Account(from);
  }
  let toAccount = Account.load(to);
  if (toAccount == null) {
    toAccount = new Account(to);
  }

  fromAccount.balance = fromAccount.balance.minus(value);
  toAccount.balance = toAccount.balance.plus(value);

  fromAccount.volume = fromAccount.volume.plus(value);
  toAccount.transactionsCount = toAccount.transactionsCount.plus(1);

  fromAccount.save();
  toAccount.save();
}
