import axios from 'axios'
import { pipe, from } from 'rxjs'
import { pluck } from 'rxjs/operators'

const axiosInstance = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 4000,
})

export function getPeople(pageNum = 1) {
  return from(
    axiosInstance.get(
      `people/?page=${pageNum}`
    )
  ).pipe(
    pluck('data')
  )
}
