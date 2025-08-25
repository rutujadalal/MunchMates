// const pool = require("../../config/db");

// // ➕ Create Occasion Card
// // exports.createOccasionCard = async (req, res) => {
// //   try {
// //     const { title, description, category } = req.body;
// //     const image_url = req.file ? req.file.filename : null;

// //     const result = await pool.query(
// //       "INSERT INTO celebration_cards (title, description, image_url, category) VALUES ($1, $2, $3, $4) RETURNING *",
// //       [title, description, image_url, category]
// //     );

// //     res.status(201).json(result.rows[0]);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// exports.createOccasionCard = async (req, res) => {
//   try {
//     const { title, description, category } = req.body;

//     // ✅ Handle uploaded image
//     const image_url = req.file ? req.file.filename : null;

//     if (!title || !description || !category) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     const result = await pool.query(
//       `INSERT INTO celebration_cards (title, description, image_url, category)
//        VALUES ($1, $2, $3, $4)
//        RETURNING *`,
//       [title, description, image_url, category]
//     );

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error creating occasion card:', err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// // 📃 Get All Occasion Cards
// exports.getAllOccasionCards = async (req, res) => {
//   try {
//     const result = await pool.query("SELECT * FROM celebration_cards");
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // 📂 Get Cards by Category
// // exports.getOccasionCardsByCategory = async (req, res) => {
// //   try {
// //     const { category } = req.params;
// //     const result = await pool.query(
// //       "SELECT * FROM celebration_cards WHERE category = $1",
// //       [category]
// //     );
// //     res.json(result.rows);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// exports.getOccasionCardsByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;

//     // Basic validation for category parameter
//     if (!category || typeof category !== "string") {
//       return res.status(400).json({ error: "Invalid category" });
//     }

//     const result = await pool.query(
//       "SELECT * FROM celebration_cards WHERE category = $1",
//       [category]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "No food items found for this category" });
//     }

//     res.json(result.rows);
//   } catch (err) {
//     console.error("Database query error:", err); // Log error for debugging
//     res.status(500).json({ error: err.message });
//   }
// };


// // ✏ Update Occasion Card
// // exports.updateOccasionCard = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { title, description, category } = req.body;
// //     const image_url = req.file ? req.file.filename : null;

// //     const result = await pool.query(
// //       "UPDATE celebration_cards SET title = $1, description = $2, image_url = $3, category = $4 WHERE id = $5 RETURNING *",
// //       [title, description, image_url, category, id]
// //     );

// //     res.json(result.rows[0]);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };
// exports.updateOccasionCard = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, category } = req.body;
//     const image_url = req.file ? req.file.filename : null;

//     // Prepare parts of the query dynamically
//     let setStatements = [];
//     let values = [];
//     let paramIndex = 1;

//     if (title) {
//       setStatements.push(`title = $${paramIndex++}`);
//       values.push(title);
//     }

//     if (description) {
//       setStatements.push(`description = $${paramIndex++}`);
//       values.push(description);
//     }

//     if (category) {
//       setStatements.push(`category = $${paramIndex++}`);
//       values.push(category);
//     }

//     if (image_url) {
//       setStatements.push(`image_url = $${paramIndex++}`);
//       values.push(image_url);
//     }

//     // If no fields provided to update
//     if (setStatements.length === 0) {
//       return res.status(400).json({ error: 'No fields provided to update' });
//     }

//     // Final query
//     const query = `
//       UPDATE celebration_cards
//       SET ${setStatements.join(', ')}
//       WHERE id = $${paramIndex}
//       RETURNING *`;

//     values.push(id); // Push the id as the final parameter

//     const result = await pool.query(query, values);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: 'Card not found' });
//     }

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error('Update error:', err.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };





// // ❌ Delete Occasion Card
// exports.deleteOccasionCard = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Optional: Validate ID format if needed
//     if (!id || isNaN(id)) {
//       return res.status(400).json({ error: 'Invalid ID' });
//     }

//     const result = await pool.query(
//       "DELETE FROM celebration_cards WHERE id = $1 RETURNING *",
//       [id]
//     );

//     if (result.rowCount === 0) {
//       return res.status(404).json({ error: "Card not found" });
//     }

//     res.status(200).json({ message: "Card deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting card:", err.message); // Debug log
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };




// --------------------------------------------------------------




// const pool = require("../../config/db");

// // 📌 Create Occasion Card with Multiple Categories
// exports.createOccasionCard = async (req, res) => {
//   const client = await pool.connect();
//   try {
//     let { title, description, categories } = req.body;
//     const image_url = req.file ? req.file.filename : null;

//     if (!title || !description || !categories) {
//       return res.status(400).json({ error: 'All fields including at least one category are required' });
//     }

//     if (typeof categories === 'string') {
//       categories = categories.split(',').map(c => c.trim());
//     }

//     if (!Array.isArray(categories) || categories.length === 0) {
//       return res.status(400).json({ error: 'At least one category is required' });
//     }

//     await client.query('BEGIN');

//     const result = await client.query(
//       `INSERT INTO celebration_cards (title, description, image_url)
//        VALUES ($1, $2, $3)
//        RETURNING id`,
//       [title, description, image_url]
//     );

//     const cardId = result.rows[0].id;

//     for (const categoryName of categories) {
//       const categoryRes = await client.query(
//         "SELECT id FROM categories WHERE name = $1",
//         [categoryName]
//       );

//       if (categoryRes.rows.length === 0) {
//         throw new Error("Category '${categoryName}' does not exist");
//       }

//       await client.query(
//         `INSERT INTO celebration_card_categories (card_id, category_id)
//          VALUES ($1, $2)`,
//         [cardId, categoryRes.rows[0].id]
//       );
//     }

//     await client.query('COMMIT');
//     res.status(201).json({ message: "Occasion card created successfully", cardId });
//   } catch (err) {
//     await client.query('ROLLBACK');
//     console.error('Create error:', err.message);
//     res.status(500).json({ error: err.message });
//   } finally {
//     client.release();
//   }
// };


// // 📃 Get All Occasion Cards with Categories
// exports.getAllOccasionCards = async (req, res) => {
//   try {
//     const result = await pool.query(`
//       SELECT 
//         cc.id, cc.title, cc.description, cc.image_url,
//         COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
//       FROM celebration_cards cc
//       LEFT JOIN celebration_card_categories ccc ON cc.id = ccc.card_id
//       LEFT JOIN categories c ON ccc.category_id = c.id
//       GROUP BY cc.id
//     `);

//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error('Get all error:', err.message);
//     res.status(500).json({ error: err.message });
//   }
// };



// // 📁 Get Cards by Category Name
// exports.getOccasionCardsByCategory = async (req, res) => {
//   try {
//     const { category } = req.params;

//     const result = await pool.query(`
//       SELECT 
//         cc.id, cc.title, cc.description, cc.image_url,
//         COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
//       FROM celebration_cards cc
//       JOIN celebration_card_categories ccc ON cc.id = ccc.card_id
//       JOIN categories c ON ccc.category_id = c.id
//       WHERE c.name = $1
//       GROUP BY cc.id
//     `, [category]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "No cards found for this category" });
//     }

//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error('Get by category error:', err.message);
//     res.status(500).json({ error: err.message });
//   }
// };


// // 🔄 Update Occasion Card and Categories
// exports.updateOccasionCard = async (req, res) => {
//   const client = await pool.connect();
//   try {
//     const { id } = req.params;
//     let { title, description, categories } = req.body;
//     const image_url = req.file ? req.file.filename : null;

//     if (typeof categories === 'string') {
//       categories = categories.split(',').map(c => c.trim());
//     }

//     await client.query('BEGIN');

//     let fields = [];
//     let values = [];
//     let index = 1;

//     if (title) {
//       fields.push(title = '$${index++}');
//       values.push(title);
//     }

//     if (description) {
//       fields.push(description = '$${index++}');
//       values.push(description);
//     }

//     if (image_url) {
//       fields.push(image_url = '$${index++}');
//       values.push(image_url);
//     }

//     if (fields.length > 0) {
//       values.push(id);
//       await client.query("UPDATE celebration_cards SET ${fields.join(', ')} WHERE id = $${index}", values);
//     }

//     if (categories && categories.length > 0) {
//       await client.query("DELETE FROM celebration_card_categories WHERE card_id = $1", [id]);

//       for (const categoryName of categories) {
//         const categoryRes = await client.query("SELECT id FROM categories WHERE name = $1", [categoryName]);

//         if (categoryRes.rows.length === 0) {
//           throw new Error("Category '${categoryName}' does not exist");
//         }

//         await client.query(
//           `INSERT INTO celebration_card_categories (card_id, category_id)
//            VALUES ($1, $2)`,
//           [id, categoryRes.rows[0].id]
//         );
//       }
//     }

//     await client.query('COMMIT');
//     res.status(200).json({ message: "Card updated successfully" });
//   } catch (err) {
//     await client.query('ROLLBACK');
//     console.error('Update error:', err.message);
//     res.status(500).json({ error: err.message });
//   } finally {
//     client.release();
//   }
// };

// // ❌ Delete Occasion Card
// exports.deleteOccasionCard = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await pool.query(`DELETE FROM celebration_card_categories WHERE card_id = $1`, [id]);

//     const result = await pool.query(
//       "DELETE FROM celebration_cards WHERE id = $1 RETURNING *",
//       [id]
//     );

//     if (result.rowCount === 0) {
//       return res.status(404).json({ error: "Card not found" });
//     }

//     res.status(200).json({ message: "Card deleted successfully" });
//   } catch (err) {
//     console.error("Delete error:", err.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };







const pool = require("../../config/db");

// 📌 Create Occasion Card with Multiple Categories
exports.createOccasionCard = async (req, res) => {
  const client = await pool.connect();
  try {
    let { title, description, categories } = req.body;
    const image_url = req.file ? req.file.filename : null;

    if (!title || !description || !categories) {
      return res.status(400).json({ error: 'All fields including at least one category are required' });
    }

    if (typeof categories === 'string') {
      categories = categories.split(',').map(c => c.trim());
    }

    if (!Array.isArray(categories) || categories.length === 0) {
      return res.status(400).json({ error: 'At least one category is required' });
    }

    await client.query('BEGIN');

    const result = await client.query(
      `INSERT INTO celebration_cards (title, description, image_url)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [title, description, image_url]
    );

    const cardId = result.rows[0].id;

    for (const categoryName of categories) {
      const categoryRes = await client.query(
        "SELECT id FROM categories WHERE name = $1",
        [categoryName]
      );

      if (categoryRes.rows.length === 0) {
        throw new Error(`Category '${categoryName}' does not exist`);
      }

      await client.query(
        `INSERT INTO celebration_card_categories (card_id, category_id)
         VALUES ($1, $2)`,
        [cardId, categoryRes.rows[0].id]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ message: "Occasion card created successfully", cardId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Create error:', err.message);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};

// 📃 Get All Occasion Cards with Categories
exports.getAllOccasionCards = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        cc.id, cc.title, cc.description, cc.image_url,
        COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
      FROM celebration_cards cc
      LEFT JOIN celebration_card_categories ccc ON cc.id = ccc.card_id
      LEFT JOIN categories c ON ccc.category_id = c.id
      GROUP BY cc.id
    `);

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Get all error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// 📁 Get Cards by Category Name
exports.getOccasionCardsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const result = await pool.query(`
      SELECT 
        cc.id, cc.title, cc.description, cc.image_url,
        COALESCE(json_agg(c.name) FILTER (WHERE c.name IS NOT NULL), '[]') AS categories
      FROM celebration_cards cc
      JOIN celebration_card_categories ccc ON cc.id = ccc.card_id
      JOIN categories c ON ccc.category_id = c.id
      WHERE c.name = $1
      GROUP BY cc.id
    `, [category]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No cards found for this category" });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Get by category error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// 🔄 Update Occasion Card and Categories
exports.updateOccasionCard = async (req, res) => {
  const client = await pool.connect();
  try {
    const { id } = req.params;
    let { title, description, categories } = req.body;
    const image_url = req.file ? req.file.filename : null;

    if (typeof categories === 'string') {
      categories = categories.split(',').map(c => c.trim());
    }

    await client.query('BEGIN');

    let fields = [];
    let values = [];
    let index = 1;

    if (title) {
      fields.push(`title = $${index++}`);
      values.push(title);
    }

    if (description) {
      fields.push(`description = $${index++}`);
      values.push(description);
    }

    if (image_url) {
      fields.push(`image_url = $${index++}`);
      values.push(image_url);
    }

    if (fields.length > 0) {
      values.push(id);
      await client.query(`UPDATE celebration_cards SET ${fields.join(', ')} WHERE id = $${index}`, values);
    }

    if (categories && categories.length > 0) {
      await client.query("DELETE FROM celebration_card_categories WHERE card_id = $1", [id]);

      for (const categoryName of categories) {
        const categoryRes = await client.query("SELECT id FROM categories WHERE name = $1", [categoryName]);

        if (categoryRes.rows.length === 0) {
          throw new Error(`Category '${categoryName}' does not exist`);
        }

        await client.query(
          `INSERT INTO celebration_card_categories (card_id, category_id)
           VALUES ($1, $2)`,
          [id, categoryRes.rows[0].id]
        );
      }
    }

    await client.query('COMMIT');
    res.status(200).json({ message: "Card updated successfully" });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Update error:', err.message);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
};

// ❌ Delete Occasion Card
exports.deleteOccasionCard = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(`DELETE FROM celebration_card_categories WHERE card_id = $1`, [id]);

    const result = await pool.query(
      "DELETE FROM celebration_cards WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Card not found" });
    }

    res.status(200).json({ message: "Card deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
