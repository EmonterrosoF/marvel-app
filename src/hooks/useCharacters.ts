import { useQuery } from "@tanstack/react-query"
import { getCharacter, getCharacters } from "../services/apiCharacters.service"

export const useGetCharacters = () => {
    return useQuery({
        queryKey: ["getCharacters"],
        queryFn: getCharacters,
  
    })
}

export const useGetCharacter = (id: string) => {
    return useQuery({
        queryKey: [id],
        queryFn: ()=>getCharacter(id),
  
    })
}