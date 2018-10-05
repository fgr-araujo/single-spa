import axios from 'axios'
import { pipe, from } from 'rxjs'
import { pluck } from 'rxjs/operators'

const axiosInstance = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 20000,
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

export function getPlanet(id) {
  return from(
    axiosInstance.get(
      `planets/${id}/`
    )
  ).pipe(
    pluck('data')
  )
}

export function getFilm(filmId) {
  return from(
    axiosInstance.get(
      `films/${filmId}`
    )
  ).pipe(
    pluck('data')
  )
}

export function getFilms() {
  return from(
    axiosInstance.get(
      `films`
    )
  ).pipe(
    pluck('data')
  )

}
