export const environment = {
    application:
    {
      name: 'food-app-ui',
    },
    config: {
      /* SELECT ONE OF THOSE CONFIGURATIONS */
  
      /* LOCAL JSON (NO CRUD) */
      api: false,
      url: './assets/params/json/crud/',
  
      /* LOCAL REST API CRUD WITH POSTGRESQL */
      /* api: true,
      url: 'http://localhost:5004/', */
    },
}