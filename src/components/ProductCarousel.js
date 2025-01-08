import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/ProductCarousel.css";
import { FaShoppingBag } from "react-icons/fa";

function ProductCarousel({ products = [] }) {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {products.map((product) => (
          <Card
            key={product.productId}
            sx={{ width: 200, maxWidth: 300, margin: "0 10px" }}
          >
            <CardMedia
              sx={{ height: 80 }}
              image={product.productImage}
              title={product.productName}
            />
            <CardContent sx={{ py: 1 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ mb: 0.5 }}
              >
                {product.productName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.8rem",
                  maxLines: 2,
                }}
              >
                {product.productDescription}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.8rem",
                  mt: 1,
                }}
              >
                ${product.productPrice}
              </Typography>
            </CardContent>
            <CardActions sx={{ pt: 0 }}>
              <Button
                size="medium"
                variant="outlined"
                endIcon={<FaShoppingBag />}
                style={{
                  zIndex: 1000,
                  marginLeft: "4px",
                }}
                onClick={() => window.open(product.productUrl, "_blank")}
              >
                Shop
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
