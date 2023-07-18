import axios from 'axios';

export class apiService {
    getCategory() {
      return  axios.get('https://server.painosoma.com/api/category').then((res) =>   res.data);
    }

    getParentCategory() {
      return  axios.get('https://server.painosoma.com/api/category/parentcategory').then((res) =>   res.data);
    }

    getSubCategory() {
      return  axios.get('https://server.painosoma.com/api/category/subcategory').then((res) =>   res.data);
    }
    getBlog() {
      return  axios.get('https://server.painosoma.com/api/blog').then((res) =>   res.data);
    }
    getAuthor() {
      return  axios.get('https://server.painosoma.com/api/author').then((res) =>   res.data);
    }
    getImages() {
        return axios.get("https://server.painosoma.com/api/image").then((res) => res.data);
      }

      getProducts() {
        return axios.get("https://server.painosoma.com/api/products").then((res) => res.data);
      }
      getBlogsByDesc() {
        return axios.get("https://server.painosoma.com/api/blog/desc").then((res) => res.data);
      }
}

