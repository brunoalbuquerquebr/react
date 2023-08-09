import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";

const ListaCategorias = () => {
  const [categorias, setCatedgorias] = useState([]);

  useEffect(() => {
    busca("/categorias", setCatedgorias);
  }, []);
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.id}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListaCategorias;
