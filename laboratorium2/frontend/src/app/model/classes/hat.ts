export class Hat {
    company: string;
    material: string;
    price: number;
    type: string;
    size: string;

    constructor(company: string,
                material: string,
                price: number,
                type: string,
                size: string, ) {
        this.company = company;
        this.material = material;
        this.price = price;
        this.type = type;
        this.size = size;
    }
}
