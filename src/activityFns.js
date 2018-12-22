export function prefix(location, ...prefixes) {
  return prefixes.some(prefix => location.pathname.indexOf(`${location.origin}/${prefix}`))
}

export function navbar(location) {
  return true
}

export function people(location) {
  return prefix(location, 'people')
}

export function planets(location) {
  return prefix(location, 'planets')
}
