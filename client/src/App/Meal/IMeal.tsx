export default interface IMeal {
  _id: string
  name: string,
  dateYear: number,
  dateMonth: number,
  dateDay: number,
  mealType: string,
  menus: string[],
  snacks: string[],
  imgName: string,
  imgPath: string
}