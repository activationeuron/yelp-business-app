import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization:
      'Bearer dCEkmXqEo5Q_T3_yrZeKgvR7_heJFu42i2NIXJxvm9Wj8jvX89KhYGShn1tDlQKwhTqe5m9aNnYZm5pRioHPW3hcZDDEyrUDHMxmLjMUAJa9cg8qGwJpt3WePZqMXXYx',
  },
});
