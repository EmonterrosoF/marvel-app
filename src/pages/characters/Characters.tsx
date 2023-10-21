import Atropos from "atropos/react";
import "./styleCharacters.css";

import { useGetCharacters } from "../../hooks/useCharacters";
import { Link } from "react-router-dom";

import imgDefault from "../../assets/default.png";
import { Card, Skeleton } from "@nextui-org/react";

const loadingSqueleton = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const Characters = () => {
  // const query = useQuery({ queryKey: ["todos"], queryFn: getCharacters });
  const { data, error, isLoading } = useGetCharacters();

  return (
    <>
      <div className="py-10">
        {isLoading ? (
          <div className="cards">
            {loadingSqueleton.map((element) => (
              <Card
                key={element}
                className="w-[30%] m-5 h-[500px] p-4"
                radius="lg"
              >
                <Skeleton className="rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <section className="cards">
            {data?.results.map((result) => (
              <Atropos
                key={result.id}
                stretchZ={100}
                rotateXMax={30}
                rotateYMax={30}
              >
                <Link to={{ pathname: `/characters/${result.id}` }}>
                  <div
                    style={{
                      backgroundImage:
                        result.thumbnail.path ===
                        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                          ? `url(${imgDefault})`
                          : `url(${result.thumbnail.path}.${result.thumbnail.extension})`,
                    }}
                    className="card content animated cursor-pointer"
                  >
                    <h1 className="xl:text-xl font-bold text-center bg-sky-500 ">
                      {result.name}
                    </h1>

                    {/* <img
                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                    alt={result.name}
                  /> */}
                  </div>
                </Link>
              </Atropos>
            ))}
          </section>
        )}
        <div>{error?.message}</div>
      </div>
    </>
  );
};
