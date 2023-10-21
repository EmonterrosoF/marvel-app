import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import perfile from "../assets/default.png";

const participantes = [
  {
    name: "Diego Alejandro Castro Ramírez",
    img: perfile,
    carnet: "1790-20-20986",
  },
  {
    name: "Jaqueline Maydelí Godoy Morataya",
    img: perfile,
    carnet: "1790-20-20265",
  },
  {
    name: "Jelsin Jair Saenz Castañeda",
    img: perfile,
    carnet: "1790-20-1253",
  },
  {
    name: "Rudy Isaías Morán Gómez",
    img: perfile,
    carnet: "1790-20-3374",
  },
  {
    name: "Jeremy Saúl Rodríguez García",
    img: perfile,
    carnet: "1790-20-20725",
  },
  {
    name: "Edras Rafael Monterroso Flores",
    img: perfile,
    carnet: "1790-20-10568",
  },
  {
    name: "Carlos Alejandro Rodríguez Díaz",
    img: perfile,
    carnet: "1790-20-18990",
  },
];

export const Participantes = () => {
  return (
    <>
      <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text py-10">
        Participantes
      </h1>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-2 w-[65%]">
        {participantes.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className="w-full object-cover p-5"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.name}</b>
              <p className="text-default-500">{item.carnet}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};
