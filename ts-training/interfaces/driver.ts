import { BasketballCoach } from "./basketball-coach";
import { BoxingCoach } from "./boxing-coach";
import { Coach } from "./coach";

let boxingCoach = new BoxingCoach();
let basketballCoach = new BasketballCoach();

let theCoaches: Coach[] = [];
theCoaches.push(boxingCoach);
theCoaches.push(basketballCoach);

for (let coach of theCoaches) {
    console.log(coach.getWorkout());
}