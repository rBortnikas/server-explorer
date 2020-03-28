export function sortByObjectStringProp(
  arr: any[],
  property: string,
  sortOrderAscending: boolean
) {
  return arr.sort((objA, objB) => {
    const nameA = objA[property].toUpperCase();
    const nameB = objB[property].toUpperCase();
    if (nameA < nameB) {
      return sortOrderAscending ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortOrderAscending ? 1 : -1;
    }
    return 0;
  });
}

export function sortByObjectNumberProp(
  arr: any[],
  property: string,
  sortOrderAscending: boolean
) {
  return arr.sort((objA, objB) => {
    return sortOrderAscending
      ? objA[property] - objB[property]
      : objB[property] - objA[property];
  });
}
