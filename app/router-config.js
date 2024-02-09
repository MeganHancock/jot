import { JotsController } from "./controllers/JotsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JotsController],
    view: ''

  },
  // {
  //   path: '#/about',
  //   view: 'app/views/AboutView.html'
  // }
])