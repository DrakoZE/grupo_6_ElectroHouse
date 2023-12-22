export async function getProducts() {
    try {
        const response = await fetch("http://localhost:3001/api/products")
        const data = await response.json()
        console.log(data);
        if (response.status != 200) throw new Error("Error al conectarse con la DB")

        return data.data

    } catch (error) {
        console.log(error)
    }
}