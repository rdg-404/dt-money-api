import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transations() {
  return(
    <div>
      <Header/>
      <Summary/>

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Densevolvimento de site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13-04-2023</td>
            </tr>
            <tr>
              <td width="50%">Games</td>
              <td>
                <PriceHighLight variant="outcome">
                  -R$ 300,00
                </PriceHighLight>
              </td>
              <td>Lazer</td>
              <td>10-04-2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}