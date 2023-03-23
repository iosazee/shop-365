import { useState } from 'react';
import { Box, Button, TextField, Typography, Card } from '@mui/material';
import { supabase } from '../supabaseClient';

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    category: '',
    description: '',
    image: '',
    price: 0,
    title: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { category, description, image, price, title } = product;

    // Create a new product item in the database
    const { data, error } = await supabase
      .from('products')
      .insert([{ category, description, image, price, title }]);

    if (error) {
      console.error(error);
    } else {
      console.log(data);
      setProduct({
        category: '',
        description: '',
        image: '',
        price: 0,
        title: '',
      });
    }
  };

  return (
    <Card  style={{maxWidth: 850, margin:"0 auto", padding:"30px 10px"}}>
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Admins Only</Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Use the form below to add a new product to the database
      </Typography>
      <Box component="form" onSubmit={handleFormSubmit}>
        <TextField
          fullWidth
          label="Category"
          name="category"
          value={product.category}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={product.title}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
    </Card>
  );
};

export default AdminDashboard;