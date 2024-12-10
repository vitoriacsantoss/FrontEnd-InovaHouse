import axios from 'axios';

export default class CategoryService {
  async getCategories() {
    const response = await axios.get('/categories/');
    return response.data.results;
  }

  async createCategory(category) {
    const response = await axios.post('/categoria/', category);
    return response.data;
  }
}
