import margheritaImage from "../assets/pizzas/margherita.jpg";
import diavolaImage from "../assets/pizzas/diavola.jpg";
import bufalinaImage from "../assets/pizzas/bufalina.jpg";
import quattroFormaggiImage from "../assets/pizzas/quattro-formaggi.jpg";
import capricciosaImage from "../assets/pizzas/capricciosa.jpg";
import prosciuttoFunghiImage from "../assets/pizzas/prosciutto-funghi.jpg";
import boscaiolaImage from "../assets/pizzas/boscaiola.jpg";
import parmigianaImage from "../assets/pizzas/parmigiana.jpg";
import mortadellaPistacchioImage from "../assets/pizzas/mortadella-pistacchio.jpg";
import tonnoCipollaImage from "../assets/pizzas/tonno-cipolla.jpg";

const pizzas = [
  { id: 1, name: "Margherita", description: "Pomodoro, fiordilatte e basilico", price: 8, image: margheritaImage },
  { id: 2, name: "Diavola", description: "Pomodoro, fiordilatte e salame piccante", price: 10, image: diavolaImage },
  { id: 3, name: "Bufalina", description: "Pomodoro, mozzarella di bufala e basilico", price: 11, image: bufalinaImage },
  { id: 4, name: "Quattro Formaggi", description: "Fiordilatte, gorgonzola, parmigiano e fontina", price: 11, image: quattroFormaggiImage },
  { id: 5, name: "Capricciosa", description: "Pomodoro, fiordilatte, prosciutto, funghi, olive e carciofi", price: 12, image: capricciosaImage },
  { id: 6, name: "Prosciutto e Funghi", description: "Pomodoro, fiordilatte, prosciutto cotto e funghi", price: 10, image: prosciuttoFunghiImage },
  { id: 7, name: "Boscaiola", description: "Fiordilatte, salsiccia, funghi e mozzarella", price: 12, image: boscaiolaImage },
  { id: 8, name: "Parmigiana", description: "Pomodoro, fiordilatte, melanzane, parmigiano e basilico", price: 11, image: parmigianaImage },
  { id: 9, name: "Mortadella e Pistacchio", description: "Fiordilatte, mortadella, pistacchio e stracciatella", price: 13, image: mortadellaPistacchioImage },
  { id: 10, name: "Tonno e Cipolla", description: "Pomodoro, fiordilatte, tonno e cipolla rossa", price: 10, image: tonnoCipollaImage },
];

export default pizzas;
