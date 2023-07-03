export function calculateTotal (items, tax) {
  
  tax = Math.abs(tax);


  if (tax > 1) {
    throw new Error("Tax must be entered as a percentage, not whole number!")
  }
  
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    total += item.price;

    if (item.taxable) {
      total += item.price * tax;
    }
  }

  return total;

}