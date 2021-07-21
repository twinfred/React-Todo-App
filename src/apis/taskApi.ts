import axios from "axios";
import { SECRET_API_KEY } from '../configs';

const apiBaseUrl = 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io';

async function getTasks() {
  return await axios({
    url: `${apiBaseUrl}/get`,
    method: 'GET',
    headers: {
      'X-Api-Key': SECRET_API_KEY
    }
  }).then(res => res.data);
}

async function patchTaskById(id: number, data: object) {
  return await axios({
    url: `${apiBaseUrl}/patch/${id}`,
    method: 'PATCH',
    headers: {
      'X-Api-Key': SECRET_API_KEY
    },
    data,
  }).then(res => res.data);
}

export {
  getTasks,
  patchTaskById,
}
