const data = [

    /*Pizza sauce tomate*/ 

    {
        "id": 1,
        "name": "Margherita",
        "imageUrl": require("../images/Pizza/marguerita.png"),
        "ingredient" : "Tomates, Mozzarella, Olives",
        "price": "9€",
        "category": "pizza",
        "subCategory": "Base tomate"
    },
    {
        "id": 2,
        "name": "Campione",
        "imageUrl": require("../images/Pizza/campione.png"), 
        "ingredient" : "Viande hachée, Champignons",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"
    },
    {
        "id": 3,
        "name": "4 Fromages",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Chèvre, Reblochon, Bleu, Mozzarella",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 4,
        "name": "Orientale",
        "imageUrl": require("../images/Pizza/fajita.png"),
        "ingredient" : "Merguez, Poivrons, Olives, Oeuf",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 5,
        "name": "Texas",
        "imageUrl": require("../images/Pizza/gourmande.png"),
        "ingredient" : "Viande hachée, chorizo, oignons",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 5,
        "name": "3 Jambons",
        "imageUrl": require("../images/Pizza/gourmande.png"),
        "ingredient" : "Lardons, Jambon, chorizo",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 6,
        "name": "Gourmande",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Viande hachée, merguez, poulet",
        "price": "12€",
        "category": "pizza",
        "subCategory": "sauce tomate"

    },
    {
        "id": 7,
        "name": "Mexicaine",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Viande hachée, merguez, poivrons, oeuf",
        "price": "12€",
        "category": "pizza"
    },
    {
        "id": 8,
        "name": "Fajita",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Chicken, poivrons, oignons",
        "price": "12€",
        "category": "pizza",
        "subCategory": "sauce tomate"

    },
    {
        "id": 9,
        "name": "Végétarienne",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "Champignons, poivrons, aubergines, olives, tomates",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 10,
        "name": "Marinera",
        "imageUrl": require("../images/Pizza/campione.png"),
        "ingredient" : "(Fruits de mer, anchois, crevettes",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 11,
        "name": "Thon",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Thon, oignons, olives",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
    {
        "id": 12,
        "name": "Reine",
        "imageUrl": require("../images/Pizza/4fromages.png"),
        "ingredient" : "Jambon, champignon, pomme de terre",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base tomate"

    },
 
    /*Pizzas crème*/ 
    {
        "id": 13,
        "name": "Savoyarde",
        "imageUrl": require("../images/pizzaBlanche/savoyarde.png"),
        "ingredient" : "Jambon, Lardons, PTD, Reblochon",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 14,
        "name": "Raclette",
        "imageUrl": require("../images/pizzaBlanche/raclette.png"),
        "ingredient" : "Jambon, Raclette, Ladrons, PDT",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 15,
        "name": "Boursin",
        "imageUrl": require("../images/pizzaBlanche/boursin.png"),
        "ingredient" : "Viande hachée, Kebab, Oignons, Boursin",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 16,
        "name": "Chicken",
        "imageUrl": require("../images/pizzaBlanche/chicken.png"),
        "ingredient" : "Poulet, PDT, Oignons, Olives",
        "price": "12€",
        "category": "Base crème fraîche"
    },
    {
        "id": 17,
        "name": "Chèvre Miel",
        "imageUrl": require("../images/pizzaBlanche/chevreMiel.png"),
        "ingredient" : "Lardons, Chèvre, Miel",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 18,
        "name":"Buffalo",
        "imageUrl": require("../images/pizzaBlanche/buffalo.png"),
        "ingredient" : "Sauce barbecue, viande hachée, pepperoni, oignons",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 19,
        "name": "Oceane",
        "imageUrl": require("../images/pizzaBlanche/oceane.png"),
        "ingredient" : "Saumon fumé, PDT, Citron, Ciboulette",
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 20,
        "name": "Fromagère",
        "imageUrl": require("../images/pizzaBlanche/fromagère.png"),
        "ingredient" : "Sauce Fromagère, chèvre, raclette, gorgonzolla, Mozza",    
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },
    {
        "id": 21,
        "name": "Châlonnaise",
        "imageUrl": require("../images/pizzaBlanche/chalonnaise.png"),
        "ingredient" : "Kebab, merguez, poulet, gorgonzolla, PDT, Mozza",    
        "price": "12€",
        "category": "pizza",
        "subCategory": "Base crème fraîche"
    },

    /*Sandwich*/
    {
        "id": 22,
        "name": "Kebab",
        "imageUrl": require("../images/sandwichs/kebab.png"),
        "ingredient" : "Viande de kebab (veau et dinde)",    
        "price": "7€",
        "category": "sandwich"
    },
    {
        "id": 23,
        "name": "Chicken",
        "imageUrl": require("../images/sandwichs/chicken.png"),
        "ingredient" : "Poulet, cheddar",    
        "price": "7.5€",
        "category": "sandwich"
    },
    {
        "id": 24,
        "name": "Spécial",
        "imageUrl": require("../images/sandwichs/spécial.png"),
        "ingredient" : "3 steaks ou 3 merguez, cheddar",    
        "price": "8€",
        "category": "sandwich"
    },
    {
        "id": 25,
        "name": "Américain",
        "imageUrl": require("../images/sandwichs/americain.png"),
        "ingredient" : "3 steaks ou 3 merguez, cheddar",    
        "price": "8€",
        "category": "sandwich"
    },
    {
        "id": 26,
        "name": "Mixte",
        "imageUrl": require("../images/sandwichs/mixte.png"),
        "ingredient" : "2 viandes au choix ",    
        "price": "8.5€",
        "category": "sandwich"
    },
    {
        "id": 27,
        "name": "Savoureux",
        "imageUrl": require("../images/sandwichs/savoureux.png"),
        "ingredient" : "Escalope, steak, bacon, boursin",    
        "price": "7€",
        "category": "sandwich"
    },
    {
        "id": 28,
        "name": "Oriental",
        "imageUrl": require("../images/sandwichs/oriental.png"),
        "ingredient" : "poulet, poivrons, olives",    
        "price": "8€",
        "category": "sandwich"
    },
    {
        "id": 29,
        "name": "Charolais",
        "imageUrl": require("../images/sandwichs/charolais.png"),
        "ingredient" : "Steak, oeuf, raclette",    
        "price": "8€",
        "category": "sandwich"
    },
    {
        "id": 30,
        "name": "Radical",
        "imageUrl": require("../images/sandwichs/radical.png"),
        "ingredient" : "Steak, poulet, oeuf",    
        "price": "8€",
        "category": "sandwich"
    },
    {
        "id": 31,
        "name": "Croque monsieur",
        "imageUrl": require("../images/sandwichs/croque.png"),
        "ingredient" : "Jambon de dinde, crème ",    
        "price": "4.5€",
        "category": "sandwich"
    },
    {
        "id": 32,
        "name": "Hummer",
        "imageUrl": require("../images/sandwichs/hummer.png"),
        "ingredient" : "3 steaks, 3 fromages",    
        "price": "8€",
        "category": "sandwich"
    },
    /*Burger*/
    {
        "id": 33,
        "name": "Cheese burger",
        "imageUrl": require("../images/burgers/cheeseburger.png"),
        "ingredient" : "Steak 45gr, cheddar, \n sauce crudités",    
        "price": "4.5€",
        "category": "burger"
    },
    {
        "id": 33,
        "name": "Double cheese",
        "imageUrl": require("../images/burgers/double cheese.png"),
        "ingredient" : "Steak 45gr, cheddar, sauce crudités",    
        "price": "6€",
        "category": "burger"
    },
    {
        "id": 34,
        "name": "Triple cheese",
        "imageUrl": require("../images/burgers/triple cheese.png"),
        "ingredient" : "3 Steak 45gr , 3 cheddar sauce ,crudités",    
        "price": "7.5€",
        "category": "burger"
    },
    {
        "id": 35,
        "name": "Fish burger",
        "imageUrl": require("../images/burgers/fish.png"),
        "ingredient" : "Poisson pané,  cheddar sauce,crudités",    
        "price": "6.5€",
        "category": "burger"
    },
    {
        "id": 36,
        "name": "Chicken burger",
        "imageUrl": require("../images/burgers/chicken burger.png"),
        "ingredient" : "Galette de chicken, cheddar sauces, crudités",    
        "price": "8€",
        "category": "burger"
    },
    {
        "id": 37,
        "name": "Cheese bacon",
        "imageUrl": require("../images/burgers/cheese bacon.png"),
        "ingredient" : "Steak 45gr ,bacon ,œuf sauce, crudités",    
        "price": "6.5€",
        "category": "burger"
    },
    {
        "id": 38,
        "name": "Blindé  burger",
        "imageUrl": require("../images/burgers/blindé.png"),
        "ingredient" : "Steak 180gr, galette de pomme de terre , oeuf",    
        "price": "10€",
        "category": "burger"
    },
    {
        "id": 39,
        "name": "Rif burger",
        "imageUrl": require("../images/burgers/rifburger.png"),
        "ingredient" : "Galette de PDT , galette de chicken, cheddar, sauce  crudités",    
        "price": "8€",
        "category": "burger"
    },
    /*assiets*/
    {
        "id": 40,
        "name": "Kebab",
        "imageUrl": require("../images/asiettes/kebab.png"),
        "ingredient" : "",    
        "price": "10€",
        "category": "assiets"
    },
    {
        "id": 41,
        "name": "Chicken",
        "imageUrl": require("../images/asiettes/chicken.png"),
        "ingredient" : "",    
        "price": "10.5€",
        "category": "assiets"
    },
    {
        "id": 42,
        "name": "Steak",
        "imageUrl": require("../images/asiettes/steak.png"),
        "ingredient" : "",    
        "price": "10.5€",
        "category": "assiets"
    },
    {
        "id": 43,
        "name": "Mixte",
        "imageUrl": require("../images/asiettes/mixte.png"),
        "ingredient" : "",    
        "price": "11€",
        "category": "assiets"
    },
    {
        "id": 44,
        "name": "Kefta",
        "imageUrl": require("../images/asiettes/kefta.png"),
        "ingredient" : "",    
        "price": "10€",
        "category": "assiets"
    },
    {
        "id": 45,
        "name": "Brochettes de poulet",
        "imageUrl": require("../images/asiettes/brochette.png"),
        "ingredient" : "",    
        "price": "10.5€",
        "category": "assiets"
    },
    {
        "id": 46,
        "name": "Côte de veau",
        "imageUrl": require("../images/asiettes/cote veau.png"),
        "ingredient" : "",    
        "price": "14€",
        "category": "assiets"
    },
    {
        "id": 47,
        "name": "Merguez",
        "imageUrl": require("../images/asiettes/merguez.png"),
        "ingredient" : "",    
        "price": "11€",
        "category": "assiets"
    },
    /*Salades*/
    {
        "id": 48,
        "name": "Salade Gourmande",
        "imageUrl": require("../images/salades/gourmande.png"),
        "ingredient" : "",    
        "price": "10€",
        "category": "salade"
    },
    {
        "id": 49,
        "name": "Salade César",
        "imageUrl": require("../images/salades/cesar.png"),
        "ingredient" : "",    
        "price": "10€",
        "category": "salade"
    },
    {
        "id": 50,
        "name": "Salade Norvégienne",
        "imageUrl": require("../images/salades/norvegienne.png"),
        "ingredient" : "",    
        "price": "10€",
        "category": "salade"
    },
    {
        "id": 51,
        "name": "Salade Végétal",
        "imageUrl": require("../images/salades/Végétal.png"),
        "ingredient" : "",    
        "price": "10€",
        "category": "salade"
    },
    /*tex-mex*/ 
    
    {
        "id": 52,
        "name": "Calamar",
        "imageUrl": require("../images/tex-mex/calamar.png"),
        "ingredient" : "(6 pièces 5€ ,  10 pièces 8€) ",    
        "price": "",
        "category": "tex-mex"
    },
    {
        "id": 53,
        "name": "Jalapeños",
        "imageUrl": require("../images/tex-mex/Jalapenos.png"),
        "ingredient" : "(6 pièces 5€ ,  10 pièces 8€) ",    
        "price": "",
        "category": "tex-mex"
    },
    {
        "id": 54,
        "name": "Nuggets",
        "imageUrl": require("../images/tex-mex/nuggets.png"),
        "ingredient" : "(6 pièces 5€ ,  10 pièces 8€) ",    
        "price": "",
        "category": "tex-mex"
    },
    {
        "id": 55,
        "name": "Mozza Sticks",
        "imageUrl": require("../images/tex-mex/mozza sticks.png"),
        "ingredient" : "(6 pièces 5€ ,  10 pièces 8€) ",    
        "price": "",
        "category": "tex-mex"
    },
    {
        "id": 56,
        "name": "Chicken wings",
        "imageUrl": require("../images/tex-mex/wings.png"),
        "ingredient" : "(6 pièces 5€ ,  10 pièces 8€) ",    
        "price": "",
        "category": "tex-mex"
    },
    {
        "id": 57,
        "name": "Oignons rings",
        "imageUrl": require("../images/tex-mex/rings.png"),
        "ingredient" : "(6 pièces 5€ ,  10 pièces 8€) ",    
        "price": "",
        "category": "tex-mex"
    },
    /*Paninis*/ 
    
    {
        "id": 58,
        "name": "Viande hachée",
        "imageUrl": require("../images/paninis/viande.png"),
        "ingredient" : "6€",    
        "price": "",
        "category": "paninis"
    },
    {
        "id": 59,
        "name": "Poulet",
        "imageUrl": require("../images/paninis/poulet.png"),
        "ingredient" : "6€",    
        "price": "",
        "category": "paninis"
    },
    {
        "id": 60,
        "name": "3 Fromages",
        "imageUrl": require("../images/paninis/fromage.png"),
        "ingredient" : "6€",    
        "price": "",
        "category": "paninis"
    },
    {
        "id": 61,
        "name": "Kebab",
        "imageUrl": require("../images/paninis/kebab.png"),
        "ingredient" : "6€",    
        "price": "",
        "category": "paninis"
    },
    {
        "id": 62,
        "name": "Merguez",
        "imageUrl": require("../images/paninis/merg.png"),
        "ingredient" : "6€",    
        "price": "",
        "category": "paninis"
    },
    /**poli roti */
   
    {
        "id": 63,
        "name": "Poulet rôti",
        "imageUrl": require("../images/poli/pouli.png"),
        "ingredient" : "1/2 Poulet + Frites + Boisson ",    
        "price": "10€",
        "category": "poli"
    },
    {
        "id": 64,
        "name": "Hâagen-Dazs",
        "imageUrl": require("../images/deserts/haagendaas.png"),
        "ingredient" : "100ml 4€ 500ml 7.5€",    
        "price": "",
        "category": "deserts",
        "subCategory": "Häagen Dazs"
        
    },
    {
        "id": 65,
        "name": "Brownie",
        "imageUrl": require("../images/deserts/brownies.png"),
        "ingredient" : "3€",    
        "price": "",
        "category": "deserts",
        "subCategory": "Gateaux"
    },
    {
        "id": 65,
        "name": "Fondant au chocolat ",
        "imageUrl": require("../images/deserts/chocolat.png"),
        "ingredient" : "3€",    
        "price": "",
        "category": "deserts",
        "subCategory": "Gateaux"
    },
    {
        "id": 65,
        "name": "Tarte daims",
        "imageUrl": require("../images/deserts/daims.png"),
        "ingredient" : "3€",    
        "price": "",
        "category": "deserts",
        "subCategory": "Gateaux"
    },
    {
        "id": 65,
        "name": "Tiramisu",
        "imageUrl": require("../images/deserts/tiramisu.png"),
        "ingredient" : "3€",    
        "price": "",
        "category": "deserts",
        "subCategory": "Gateaux"
    },
    /**menu offres */
    {
        "id": 66,
        "name": "Bucket",
        "imageUrl": require("../images/offres/bucket.png"),
        "ingredient" : "10 tenders + 10 wings + 2 frites + bouteille",    
        "price": "30€",
        "category": "offres",
        "subCategory": "Bucket"
    },
    {
        "id": 67,
        "name": "Menu tenders",
        "imageUrl": require("../images/offres/Menu_tenders.png"),
        "ingredient" : "5 tenders +  frites + boisson",    
        "price": "10€",
        "category": "offres",
        "subCategory": "Menu tenders"
    },
    {
        "id": 68,
        "name": "Menu enfant",
        "imageUrl": require("../images/offres/enfant.png"),
        "ingredient" : "Nugget ou Burger + Capri sun ",    
        "price": "6€",
        "category": "offres",
        "subCategory": "Menu enfant"
    },
    {
        "id": 69,
        "name": "Menu family",
        "imageUrl": require("../images/offres/family.png"),
        "ingredient" : "3 Pizzas + Boisson 1L ",    
        "price": "30€",
        "category": "offres",
        "subCategory": "Menu family"
    },
    {
        "id": 70,
        "name": "Les sauces",
        "imageUrl": require("../images/sauces/sauce.png"),
        "ingredient" : "Blanche, Mayo, Harissa, Ketchup, Samouraï, Algérienne, Marocaine, Andalouse, Barbecue, Biggy Burger",    
        "price": "",
        "category": "sauceboi",
        "subCategory": "Sauce"
    },
    {
        "id": 71,
        "name": "Les Boissons",
        "imageUrl": require("../images/boissons/boisson.png"),
        "ingredient" : "33CL 1.50€, 50CL 2€, 1.5L 3€",    
        "price": "",
        "category": "sauceboi",
        "subCategory": "Boissons"
    },
];

export default data;