export class TransactionCntroller {
  constructor(transactionService) {
    this.transactionService = transactionService;
  }

  async checkout(req, res) {
    try {
      const custID = res.account.id;
      const transaction = await this.transactionService.checkout(custID);
      return res.status(200).json(transaction);
    } catch (error) {
      throw error
    }
  }

  async getInvoices(req, res) {
    try {
      const custID = res.account.id;
      const invoices = await this.transactionService.getInvoices(custID);
      return res.status(200).json(invoices);
    } catch (error) {
      throw error
    }
  }
}