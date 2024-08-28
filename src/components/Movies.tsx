import { useEffect, useState } from "react";

export const Movies = () => {
    const [name, setName] = useState("Ash");
    const [age, setAge] = useState(0);
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        console.log("useEffect - name");
    }, [name]);

    return (
        <>
            <section>
                {name} - 
                <button onClick={() => setName("Shiro")}>Ändra</button>
                <button onClick={() => setAge("2")}>Ändra ålder</button>
            </section>
            Movies:
        </>
    );
};

