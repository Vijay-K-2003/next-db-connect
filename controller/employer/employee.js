import { executeQuery } from "../../config/db";

const getAllEmployees = async (req, res) => {
    let employeeData = await executeQuery('SELECT * FROM customer', []);
    res.send(employeeData);
};

export { getAllEmployees };
