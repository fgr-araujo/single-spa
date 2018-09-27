export function hashPrefix(location, ...prefixes) {
  return prefixes.some(prefix => location.hash.indexOf(`#/${prefix}`) === 0);
}

export function reactApp1(location) {
  return hashPrefix(location, 'react1')
}

export function navbar(location) {
  return true
}
