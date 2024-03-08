// import pizza1Image from "../images/Pizza/4fromages.png";
import pizza from "../images/Pizza/3jambons.png"
const data = [

    /*Pizza sauce tomate*/ 

    {
        "id": 1,
        "name": "Margherita",
        "imageUrl": require("../images/Pizza/marguerita.png"),
        "ingredient" : "Tomates, Mozzarella, Olives",
        "price": 9,
        "category": "pizza",
        "subCategory": "Base tomate"
    },
    {
        "id": 2,
        "name": "Campione",
        "imageUrl": require("../images/Pizza/campione.png"), 
        "ingredient" : "Viande hachée, Champignons",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"
    },
    {
        "id": 3,
        "name": "4 Fromages",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Chèvre, Reblochon, Bleu, Mozzarella",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 4,
        "name": "Orientale",
        "imageUrl": require("../images/Pizza/fajita.png"),
        "ingredient" : "Merguez, Poivrons, Olives, Oeuf",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 5,
        "name": "Texas",
        "imageUrl": require("../images/Pizza/gourmande.png"),
        "ingredient" : "Viande hachée, chorizo, oignons",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 5,
        "name": "3 Jambons",
        "imageUrl": require("../images/Pizza/gourmande.png"),
        "ingredient" : "Lardons, Jambon, chorizo",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 6,
        "name": "Gourmande",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Viande hachée, merguez, poulet",
        "price": 12,
        "category": "pizza",
        "subCategory": "sauce tomate"

    },
    {
        "id": 7,
        "name": "Mexicaine",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Viande hachée, merguez, poivrons, oeuf",
        "price": 12,
        "category": "pizza"
    },
    {
        "id": 8,
        "name": "Fajita",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Chicken, poivrons, oignons",
        "price": 12,
        "category": "pizza",
        "subCategory": "sauce tomate"

    },
    {
        "id": 9,
        "name": "Végétarienne",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Champignons, poivrons, aubergines, olives, tomates",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 10,
        "name": "Marinera",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "(Fruits de mer, anchois, crevettes",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 11,
        "name": "Thon",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Thon, oignons, olives",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 12,
        "name": "Reine",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Jambon, champignon, pomme de terre",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base tomate"

    },
 
    /*Pizzas crème*/ 
    {
        "id": 13,
        "name": "Savoyarde",
        "imageUrl": require("../images/pizzaBlanche/savoyarde.png"),
        "ingredient" : "Jambon, Lardons, PTD, Reblochon",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 14,
        "name": "Raclette",
        "imageUrl": require("../images/pizzaBlanche/raclette.png"),
        "ingredient" : "Jambon, Raclette, Ladrons, PDT",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 15,
        "name": "Boursin",
        "imageUrl": require("../images/pizzaBlanche/boursin.png"),
        "ingredient" : "Viande hachée, Kebab, Oignons, Boursin",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 16,
        "name": "Chicken",
        "imageUrl": require("../images/pizzaBlanche/chicken.png"),
        "ingredient" : "Poulet, PDT, Oignons, Olives",
        "price": 12,
        "category": "Base crème fraîche"
    },
    {
        "id": 17,
        "name": "Chèvre Miel",
        "imageUrl": require("../images/pizzaBlanche/chevreMiel.png"),
        "ingredient" : "Lardons, Chèvre, Miel",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 18,
        "name":"Buffalo",
        "imageUrl": require("../images/pizzaBlanche/buffalo.png"),
        "ingredient" : "Sauce barbecue, viande hachée, pepperoni, oignons",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 19,
        "name": "Oceane",
        "imageUrl": require("../images/pizzaBlanche/oceane.png"),
        "ingredient" : "Saumon fumé, PDT, Citron, Ciboulette",
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 20,
        "name": "Fromagère",
        "imageUrl": require("../images/pizzaBlanche/fromagère.png"),
        "ingredient" : "Sauce Fromagère, chèvre, raclette, gorgonzolla, Mozza",    
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 21,
        "name": "Châlonnaise",
        "imageUrl": require("../images/pizzaBlanche/chalonnaise.png"),
        "ingredient" : "Kebab, merguez, poulet, gorgonzolla, PDT, Mozza",    
        "price": 12,
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },

    /*Sandwich*/
    {
        "id": 22,
        "name": "Kebab",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Viande de kebab (veau et dinde)",    
        "price": 7,
        "category": "sandwich"
    },
    {
        "id": 23,
        "name": "Chicken",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Poulet, cheddar",    
        "price": 7.5,
        "category": "sandwich"
    },
    {
        "id": 24,
        "name": "Spécial",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "3 steaks ou 3 merguez, cheddar",    
        "price": 8,
        "category": "sandwich"
    },
    {
        "id": 25,
        "name": "Américain",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "3 steaks ou 3 merguez, cheddar",    
        "price": 8,
        "category": "sandwich"
    },
    {
        "id": 26,
        "name": "Mixte",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "2 viandes au choix ",    
        "price": 8.5,
        "category": "sandwich"
    },
    {
        "id": 27,
        "name": "Savoureux",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Escalope, steak, bacon, boursin",    
        "price": 7,
        "category": "sandwich"
    },
    {
        "id": 28,
        "name": "Oriental",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "poulet, poivrons, olives",    
        "price": 8,
        "category": "sandwich"
    },
    {
        "id": 29,
        "name": "Charolais",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Steak, oeuf, raclette",    
        "price": 8,
        "category": "sandwich"
    },
    {
        "id": 30,
        "name": "Radical",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Steak, poulet, oeuf",    
        "price": 8,
        "category": "sandwich"
    },
    {
        "id": 31,
        "name": "Croque monsieur",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Jambon de dinde, crème ",    
        "price": 4.5,
        "category": "sandwich"
    },
    {
        "id": 32,
        "name": "Hummer",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "3 steaks, 3 fromages",    
        "price": 8,
        "category": "sandwich"
    },
    /*Burger*/
    {
        "id": 33,
        "name": "Cheese burger",
        "imageUrl": require("../images/burgers/cheeseburger.png"),
        "ingredient" : "Steak 45gr, cheddar, \n sauce crudités",    
        "price": 4.5,
        "category": "burger"
    },
    {
        "id": 33,
        "name": "Double cheese",
        "imageUrl": require("../images/burgers/double cheese.png"),
        "ingredient" : "Steak 45gr, cheddar, sauce crudités",    
        "price": 6,
        "category": "burger"
    },
    {
        "id": 34,
        "name": "Triple cheese",
        "imageUrl": require("../images/burgers/triple cheese.png"),
        "ingredient" : "3 Steak 45gr , 3 cheddar sauce ,crudités",    
        "price": 7.5,
        "category": "burger"
    },
    {
        "id": 35,
        "name": "Fish burger",
        "imageUrl": require("../images/burgers/fish.png"),
        "ingredient" : "Poisson pané,  cheddar sauce,crudités",    
        "price": 6.5,
        "category": "burger"
    },
    {
        "id": 36,
        "name": "Chicken burger",
        "imageUrl": require("../images/burgers/chicken burger.png"),
        "ingredient" : "Galette de chicken, cheddar sauces, crudités",    
        "price": 8,
        "category": "burger"
    },
    {
        "id": 37,
        "name": "Cheese bacon",
        "imageUrl": require("../images/burgers/cheese bacon.png"),
        "ingredient" : "Steak 45gr ,bacon ,œuf sauce, crudités",    
        "price": 6.5,
        "category": "burger"
    },
    {
        "id": 38,
        "name": "Blindé  burger",
        "imageUrl": require("../images/burgers/blindé.png"),
        "ingredient" : "Steak 180gr, galette de pomme de terre , oeuf",    
        "price": 10,
        "category": "burger"
    },
    {
        "id": 39,
        "name": "Rif burger",
        "imageUrl": require("../images/burgers/rif.png"),
        "ingredient" : "Galette de PDT , galette de chicken, cheddar, sauce  crudités",    
        "price": 8,
        "category": "burger"
    },
    /* Deserts*/ 
    {
        "id": 40,
        "name": "gateau",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "",    
        "price": 8,
        "category": "deserts",
        "subCategory": "gateau"
    },
    {
        "id": 41,
        "name": "haagen dazs",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "",    
        "price": 8,
        "category": "deserts",
        "subCategory": "haagen-dazs"
    },


];

export default data;