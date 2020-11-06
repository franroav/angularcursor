export class Region {
  constructor(
    public id: number,
    public nombre: string,
    public comunas: [
      {
        id: number;
        nombre: string;
      }
    ]
  ) {}
}
