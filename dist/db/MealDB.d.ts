import mongoose from 'mongoose';
export interface IMeal extends mongoose.Document {
    imgPath: string;
    name: string;
    date: Date;
    mealType: string;
    menus: string[];
    snacks: string[];
}
declare const _default: {
    MealModel: mongoose.Model<mongoose.Document<any>>;
};
export default _default;
//# sourceMappingURL=MealDB.d.ts.map