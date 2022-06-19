function generateInvoiceNo() {
  const invoiceNoLength = 6;
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const alaphbit = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let invoiceNo = [];
  for (let i = 0; i < invoiceNoLength; i++) {
    if (i < 2) {
      const randomLetter = Math.floor(Math.random() * alaphbit.length);
      const letter = alaphbit[randomLetter];
      invoiceNo.push(letter);
    } else {
      const randomNumber = Math.floor(Math.random() * num.length);
      const number = num[randomNumber];
      invoiceNo.push(number);
    }
  }

  return invoiceNo.join("");
}

export default generateInvoiceNo;
