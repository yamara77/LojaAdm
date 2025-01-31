import React, { useState } from "react";
import { Container, Grid, Card, CardContent, CardActions, Button, Typography, TextField } from "@mui/material";

const initialProducts = [
  { id: 1, name: "Tênis Nike Air", description: "Confortável e estiloso", price: 299.99, category: "Esportivo", stock: 10 },
  { id: 2, name: "Tênis Adidas Run", description: "Leve e resistente", price: 249.99, category: "Corrida", stock: 15 }
];

function LojaDeTenis() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", category: "", stock: "" });

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.description && newProduct.price && newProduct.category && newProduct.stock) {
      const productToAdd = { ...newProduct, id: products.length + 1, price: parseFloat(newProduct.price), stock: parseInt(newProduct.stock) };
      setProducts([...products, productToAdd]);
      setNewProduct({ name: "", description: "", price: "", category: "", stock: "" });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Loja de Tênis - Administração</Typography>
      <div>
        <TextField label="Nome" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <TextField label="Descrição" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
        <TextField label="Preço" type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <TextField label="Categoria" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <TextField label="Estoque" type="number" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
        <Button onClick={handleAddProduct} variant="contained" color="primary">Adicionar Produto</Button>
      </div>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="body1">Preço: R$ {product.price.toFixed(2)}</Typography>
                <Typography variant="body2">Estoque: {product.stock}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Editar</Button>
                <Button size="small" color="secondary" onClick={() => handleDelete(product.id)}>Remover</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LojaDeTenis;
