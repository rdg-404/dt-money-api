import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm(){

  const {register, handleSubmit} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTransactions(data: SearchFormInputs){
    console.log(data)
  }

  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="" 
        placeholder="Buscar por transações"
        {...register('query')}
      />

      <button type="submit">
        <MagnifyingGlass/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}