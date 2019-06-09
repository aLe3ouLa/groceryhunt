export class Product {
  constructor(
    public product_id: string,
    public name: string,
    public price: string,
    public image: string,
    public description?: string
  ) {}
}
