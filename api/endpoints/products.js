const express = require("express");
const authcheck = require("../middleware/authcheck");
const router = express.Router();

// GET /products - Get all products
router.get("/products", async (req, res) => {
    const pool = req.app.get('db'); // Access the global pool
    try {
        const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error fetching products" });
    }
});

// GET /products/mylistings - Get products for the logged-in user
//issue 8 - Fixed the incorrect Query, included owner email in search criteria. 
router.get("/products/mylistings", authcheck, async (req, res) => {
    const pool = req.app.get('db');
    try {
        const userEmail = req.user.email;
        console.log(userEmail);
        const result = await pool.query(
            "SELECT * FROM products where owner_email = $1 ORDER BY id DESC",
            [userEmail]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error fetching your listings" });
    }
});

// POST /products - Create a new listing
router.post("/products", authcheck, async (req, res) => {
    const pool = req.app.get('db');
    const { title, price, image_url } = req.body;
    const owner_email = req.user.email;

    try {
        const result = await pool.query(
            "INSERT INTO products (title, price, image_url, owner_email) VALUES ($1, $2, $3, $4) RETURNING *",
            [title, price, image_url, owner_email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error creating product" });
    }
});


//Delete selected Product
router.delete("/products/delete/:id",async(req,res)=>{
    const pool = req.app.get('db');
    const { id } = req.params;
    console.log(req.params)
    try{
       
        const result = await pool.query(
            "DELETE from products Where id= $1 RETURNING *",
            [id]
        );
         if (result.rowCount === 0) {
            return res.status(404).json({
            success: false,
            message: "Product not found"
         });
         }

        res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: result.rows[0]
        });
    }catch(error){
      res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message
     });
    }
});
module.exports = router;