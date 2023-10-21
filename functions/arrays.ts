export function Randomize(elements: any[]): any[] {
    return elements.map(value => ({
        value, rand: Math.random()
    }))
        .sort((obj1, obj2) => obj1.rand - obj2.rand)
        .map(obj => obj.value)

}