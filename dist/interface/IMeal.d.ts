import { Document } from "mongoose";
export interface IMeal extends Document {
    name: string;
    dateYear: number;
    dateMonth: number;
    dateDay: number;
    mealType: string;
    menus: string[];
    snacks: string[];
    imgName: string;
}
export default IMeal;
//# sourceMappingURL=Meal.d.ts.map