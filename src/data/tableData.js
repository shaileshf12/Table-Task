const tableData = [
  {
    id: "123",
    sno: 1,
    prodName: "Smartphone",
    description: "Smart mobile device",
    qty: 10,
    checked : false,
    children: [
      {
        sno: 1.1,
        prodName: "Samsung",
        description: "Camera 64MP, Battery 5000mAh",
        qty: 2,
        checked : false
      },
      {
        sno: 1.2,
        prodName: "Apple",
        description: "Camera 50MP, Battery 5500mAh",
        qty: 5,
        checked : false
      },
      {
        sno: 1.3,
        prodName: "POCO",
        description: "Camera 48MP, Battery 600mAh",
        qty: 3,
        checked : false
      }
    ],
  },

  {
    id: "124",
    sno: 2,
    prodName: "Pen",
    description: "Tool to write",
    qty: 50,
    checked : false,
    children: [
        {
            sno: 2.1,
            prodName: "Raynolds",
            description: "Good for good handwriting",
            qty: 20,
            checked : false
          },
          {
            sno: 2.2,
            prodName: "Butterfly",
            description: "Long lasting",
            qty: 30,
            checked : false
          }
    ],
  },

  {
    id: "125",
    sno: 3,
    prodName: "Laptop",
    description: "A small computer",
    qty: 7,
    checked : false,
    children: [
        {
            sno: 3.1,
            prodName: "Dell",
            description: "Core i7, Foldable, SSD 1TB",
            qty: 2,
            checked : false
          },
          {
            sno: 3.2,
            prodName: "Lenovo",
            description: "Core i5, SSD 512GB, Linux",
            qty: 3,
            checked : false
          },
          {
            sno: 3.3,
            prodName: "Asus",
            description: "Core i9, SSD 256GB, Windows",
            qty: 1,
            checked : false
          },
          {
            sno: 3.4,
            prodName: "MacBook",
            description: "SSD 256GB, RAM 16GB",
            qty: 1,
            checked : false
          }
    ],
  },
];

export default tableData;
