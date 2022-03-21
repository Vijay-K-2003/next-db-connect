import nc from 'next-connect';
import { getAllEmployees } from '../../../controller/employer/employee';

const handler = nc();
handler.get(getAllEmployees);

export default handler;
