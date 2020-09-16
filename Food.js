class Food {
    constructor(foodStock, lasteFed) {
        var options = {
            friction: 1.0,
            density: 1.0
        }
        this.image = loadImage("images/milk.png");
        World.add(world, this.body);
    }
        getFoodStock() {
            var FoodStockRef = database.ref('FoodStock');
            FoodStockRef.on("value", function (data) {
                FoodStock = data.val();
            })

            updateFoodStock(food) {
                database.ref('/').update({
                    FoodStock: food
                })
            }


            //this.body = Bodies.rectangle(x, y, width, height, options);
            //this.width = width;
            //this.height = height;
            

        display() {
            var x = 80, y = 100

            imageMode(CENTER);
            image(this.image, 720, 220, 70, 70);

            if (this.foodStock != 0) {
                for (var i = 0; i < this.foodstock; i++) {
                    if (i % 10 == 0) {
                        x = 80;
                        y = y + 50;
                    }
                    image(this.image, x, y, 50, 50);
                    x = x + 30;
                }
            }


        }
        currentTime = hour();
        if (currentTime == (lastFed + 1)) {
            update("Playing");
            foodObj.garden();
        }
        else if (currentTime > (lastFed + 2) && currentTime <= (lastFed + 4)) {
            update("Bathing");
            foodObj.washroom();
        }
        else {
            update("Hungry");
            foodObj.display();
        }
        bedroom(){
            background(bedroom, 550, 500);
        }
        garden(){
            background(garden, 550, 500);
        }
        washroom(){
            background(washroom, 550, 500);
        }
    }
        

       