import { gql } from "@apollo/client";


export const REGISTER = gql`
    mutation Register($input: RegisterInput) {
  register(input: $input) {
    email
    first_name
    last_name
    password
  }
}`