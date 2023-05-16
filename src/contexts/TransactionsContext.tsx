import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}


interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}


interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext( {} as TransactionContextType);



export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions');

    if(query) {
      url.searchParams.append('q', query)
    }
    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }
  

  //executar somente uma vez a chamada para a api
  useEffect(() =>{
    fetchTransactions();
  }, [])


  //children reconhece qualquer elemento html
  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}