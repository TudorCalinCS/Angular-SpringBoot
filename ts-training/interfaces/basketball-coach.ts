import { Coach } from "./coach";

export class BasketballCoach implements Coach {
    
    getWorkout(): string {
        return "Practice your free throws.";
    }
}