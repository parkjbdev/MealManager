import mongoose from "mongoose";
declare const _default: {
    conn: mongoose.Connection & {
        then: <TResult1 = mongoose.Connection, TResult2 = never>(onfulfilled?: ((value: mongoose.Connection) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
        catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<mongoose.Connection | TResult>;
    };
};
export default _default;
//# sourceMappingURL=MealDB.d.ts.map