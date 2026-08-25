
const createBankAccount = (initialBalance) => { //outer function
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      if (amount > 0) {
        balance += amount;
       // balance = amount + balance;
        console.log(`Deposited: $${amount}. New balance: $${balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    },
    withdraw: (amount) => {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        //balance = balance - amount;
        console.log(`Withdrew: $${amount}. New balance: $${balance}`);
      } else if (amount > balance) {
        console.log('Insufficient funds.');
      } else {
        console.log('Withdrawal amount must be positive.');
      }
    },
    getBalance: () => {
      console.log(`Current balance: $${balance}`);
      return balance;
    }
  };
};

// Example usage:

const myAccount = createBankAccount(1000);
myAccount.getBalance(); // Current balance: $1000
myAccount.deposit(50); // Deposited: $50. New balance: $1050
myAccount.withdraw(40); // Withdrew: $40. New balance: $1010
myAccount.getBalance(); // Current balance: $1010    