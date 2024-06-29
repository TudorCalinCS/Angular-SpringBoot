import { Coach } from "./coach";

export class BoxingCoach implements Coach {

    getWorkout(): string {
        return "Practice your left hook.";
    }
}