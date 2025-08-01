export const dateFormatter = (dateString: string): string => {
  // Split the date string into parts
  const parts = dateString.split('-');
  
  if (parts.length !== 3 || parts[0].length !== 4 || parts[1].length !== 2 || parts[2].length !== 2) {
    return dateString
  }
  
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}