export async function getCategories() {
    try {
        const response = await fetch("http://localhost:3001/api/categories")
        const data = await response.json()
        console.log(data);
        if (response.status != 200) throw new Error("Error al conectarse con la DB")

        return data.data

    } catch (error) {
        console.log(error)
    }
}