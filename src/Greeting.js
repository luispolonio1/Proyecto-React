export function Greeting({ name, amount, married, address, greet }) {
    console.log(greet)
    return <div>
        <h1>{name}</h1>
        <p>${amount}</p>
        <p>{married ? 'estoy casado' : 'estoy soltero'}</p>
        <ul>
            <li>{address.city}</li>
            <li>{address.stret}</li>
        </ul>
    </div>
}
export function User() {
    return <h1>hola</h1>
}