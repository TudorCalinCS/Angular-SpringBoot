"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basketball_coach_1 = require("./basketball-coach");
const boxing_coach_1 = require("./boxing-coach");
let boxingCoach = new boxing_coach_1.BoxingCoach();
let basketballCoach = new basketball_coach_1.BasketballCoach();
let theCoaches = [];
theCoaches.push(boxingCoach);
theCoaches.push(basketballCoach);
for (let coach of theCoaches) {
    console.log(coach.getWorkout());
}
