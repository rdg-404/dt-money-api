import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm(){
  return(
    <SearchFormContainer>
      <input type="" placeholder="Buscar por transações"/>

      <button type="submit">
        <MagnifyingGlass/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}