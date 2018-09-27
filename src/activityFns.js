export function hashPrefix(location, ...prefixes) {
  return prefixes.some(prefix => location.hash.indexOf(`#/${prefix}`) === 0);
}

export function navbar(location) {
  return true
}

export function people(location) {
  return hashPrefix(location, 'people')
}
