
class Parson2 {
    names: string;
    private age: number;
    protected address: string;
    constructor(n: string, a: number, ad: string) {
        this.names = n;
        this.age = a;
        this.address = ad
    }
}
const rima = new Parson2("hello", 12, "mymensh")


console.log(rima);
