export class Product {
  constructor(
    public productId: string,
    public name: string,
    public price: string,
    public image: string,
    public description?: string
  ) {}
}
