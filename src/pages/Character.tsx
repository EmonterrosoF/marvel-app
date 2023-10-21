import { useParams } from "react-router-dom";
import { useGetCharacter } from "../hooks/useCharacters";
import Atropos from "atropos/react";
import imgDefault from "../assets/default.png";
import { Spinner } from "@nextui-org/react";

export const Character = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetCharacter(id as string);

  return (
    <div className="py-14">
      {isLoading ? (
        <div className="flex items-start justify-center h-[100vh]">
          <Spinner label="Cargando..." color="danger" />
        </div>
      ) : (
        <>
          <div className="absolute opacity-20 top-0 right-0">
            <img
              className="object-cover w-full h-full"
              src={
                data?.results[0].thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                  ? imgDefault
                  : `${data?.results[0].thumbnail.path}.${data?.results[0].thumbnail.extension}`
              }
            ></img>
          </div>
          {data?.results.map((result) => (
            <Atropos
              key={result.id}
              stretchZ={100}
              rotateXMax={30}
              rotateYMax={30}
            >
              <section className="flex">
                <div>
                  <div
                    style={{
                      backgroundImage:
                        result.thumbnail.path ===
                        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                          ? `url(${imgDefault})`
                          : `url(${result.thumbnail.path}.${result.thumbnail.extension})`,
                    }}
                    className="card content animated cursor-pointer"
                  ></div>
                  <h1 className="text-7xl font-extrabold">{result.name}</h1>
                  <h1 className="text-7xl font-extrabold text-red-700    dark:text-white">
                    {result.name}
                  </h1>
                </div>
                <div>
                  <h1 className="text-7xl font-extrabold text-red-700  dark:text-white">
                    {result.name}
                  </h1>
                  <p className="dark:text-slate-200 text-red-700 text-lg py-10">
                    {result.description
                      ? result.description
                      : "Sin Descripción"}
                  </p>
                </div>
              </section>
            </Atropos>
          ))}
        </>
      )}
    </div>
  );
};
