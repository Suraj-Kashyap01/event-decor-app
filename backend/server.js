import express from 'express';
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://eventdecor.vercel.app/"  // frontend ka URL
}));

// data
const products = [
  {
    id: 1,
    title: "Elegant Wedding Centerpiece N44",
    price: 45.00,
    description: "Perfect for small wedding tables with a subtle floral design.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/06/N44-CENTERPIECES-768x768.jpg"
  },
  {
    id: 2,
    title: "Elegant Wedding Centerpiece N40",
    price: 55.00,
    description: "Large centerpiece ideal for grand wedding events.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/06/N40-CENTERPIECES-768x768.jpg"
  },
  {
    id: 3,
    title: "Elegant Wedding Centerpiece N13",
    price: 42.50,
    description: "Simple yet elegant floral arrangement for intimate events.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/06/N13-CENTERPIECES-768x768.jpg"
  },
  {
    id: 4,
    title: "Centerpieces 3-pack",
    price: 99.99,
    description: "Set of 3 centerpieces for table decor, perfect for multiple events.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/06/Centerpieces-3-pack-1.jpg"
  },
  {
    id: 5,
    title: "Elegant Wedding Centerpiece B09",
    price: 59.99,
    description: "Stylish floral arrangement for modern wedding tables.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/06/B09-CENTERPIECE.jpg"
  },
  {
    id: 6,
    title: "Elegant Wedding Centerpiece B07",
    price: 47.50,
    description: "Compact centerpiece for side tables and decor accents.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/06/B07-CENTERPIECES.jpg"
  },
  {
    id: 7,
    title: "Floral Centerpiece 1712531890661329b2c22f9",
    price: 35.00,
    description: "Perfect for home decoration or small event tables.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/04/1712531890661329b2c22f9-1152x1536.png"
  },
  {
    id: 8,
    title: "Floral Centerpiece 17125318596613299398334",
    price: 44.99,
    description: "Elegant and classic centerpiece suitable for weddings and parties.",
    img: "https://pioneereventshq.com/wp-content/uploads/2024/04/17125318596613299398334-scaled-1-768x768.jpeg"
  }
];


app.get("/products", (req, res) => {
  res.json(products);
});


app.get('/', (req, res) => {
    res.send('Server is running');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
