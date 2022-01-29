const connection = require('./connection');

const getAll = async () => {
  try {
    const [result] = await connection.query('SELECT * FROM products');
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const add = async (name, brand) => {
  try {
    const [result] = await connection.query(`INSERT INTO products (name, brand) VALUES (?, ?);`, [name, brand]); 
    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return err;
  }  
};  

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    if (!result || !result.length) return { error: { code: "notFound", message: `Produto id ${id} não encontrado` }};
    return result[0];
  } catch (err) {
    console.error(err);
    return err;
  }
};

const updater = async (id, name, brand) => {
  try {
    const [product] = await getById(id);
    if (!product || !product.length) return { error: { code: "notFound", message: `Produto id ${id} não encontrado` }};
    const [result] = await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id]);
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

const deleter = async (id) => {
  try {
    const [result] = await getById(id);
    if (!result || !result.length) return { error: { code: "notFound", message: `Produto id ${id} não encontrado` }};
    await connection.query('DELETE FROM products WHERE id = ?', [id])
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};

module.exports = { add, getAll, getById, updater, deleter };