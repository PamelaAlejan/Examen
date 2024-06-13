let animales = (() => {
    const url = "http://127.0.0.1:5500/animales.json";

    const getDatos = async () => {
        let respuesta = await fetch(url);
        let { animales } = await respuesta.json()

        return animales;
    }
    return { getDatos };

})();

export default animales