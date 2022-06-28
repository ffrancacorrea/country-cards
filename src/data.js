import brazil_banner from "./assets/brazil_banner.jpg";

//norte pics
import norte_banner from "./assets/norte/norte_banner.jpg";

import acre from "./assets/norte/acre.jpg";
import amapa from "./assets/norte/amapa.jpg";
import amazonas from "./assets/norte/amazonas.jpg";
import belem_do_para from "./assets/norte/belem_do_para.jpg";
import rondonia from "./assets/norte/rondonia.jpg";
import roraima from "./assets/norte/roraima.jpg";
import tocantins from "./assets/norte/tocantins.jpg";

//nordeste pics
import nordeste_banner from "./assets/nordeste/nordeste_banner.jpg";

import alagoas from "./assets/nordeste/alagoas.jpg";
import bahia from "./assets/nordeste/bahia.jpg";
import ceara from "./assets/nordeste/ceara.jpg";
import maranhao from "./assets/nordeste/maranhao.jpg";
import paraiba from "./assets/nordeste/paraiba.jpg";
import pernambuco from "./assets/nordeste/pernambuco.jpg";
import piaui from "./assets/nordeste/piaui.jpg";
import rio_grande_do_norte from "./assets/nordeste/rio_grande_do_norte.jpg";
import sergipe from "./assets/nordeste/sergipe.jpg";

//centro-oeste pics
import centro_oeste_banner from "./assets/centro_oeste/centro_oeste_banner.jpeg";

import df from "./assets/centro_oeste/df.jpg";
import goias from "./assets/centro_oeste/goias.jpg";
import mato_grosso from "./assets/centro_oeste/mato_grosso.jpg";
import mato_grosso_do_sul from "./assets/centro_oeste/mato_grosso_do_sul.jpg";

//sudeste pics
import sudeste_banner from "./assets/sudeste/sudeste_banner.jpg";

import minas from "./assets/sudeste/minas.jpg";
import espirito_santo from "./assets/sudeste/espirito_santo.jpg";
import rio from "./assets/sudeste/rio.jpg";
import sao_paulo from "./assets/sudeste/sao_paulo.jpg";

//sul pics
import sul_banner from "./assets/sul/sul_banner.jpg";

import parana from "./assets/sul/parana.jpg";
import rio_grande_do_sul from "./assets/sul/rio_grande_do_sul.jpg";
import santa_catarina from "./assets/sul/santa_catarina.jpg";

const data = {
  country: "brazil",
  info: "",
  banner: brazil_banner,
  regions: [
    {
      name: "Norte",
      info: "",
      banner: norte_banner,
      states: [
        {
          name: "Acre",
          capital: "Rio Branco",
          info: "",
          image: acre,
        },
        {
          name: "Amapá",
          capital: "Macapá",
          info: "",
          image: amapa,
        },
        {
          name: "Amazonas",
          capital: "Manaus",
          info: "",
          image: amazonas,
        },
        {
          name: "Pará",
          capital: "Belém",
          info: "",
          image: belem_do_para,
        },
        {
          name: "Rondônia",
          capital: "Porto Velho",
          info: "",
          image: rondonia,
        },
        {
          name: "Roraima",
          capital: "Boa Vista",
          info: "",
          image: roraima,
        },
        {
          name: "Tocantins",
          capital: "Palmas",
          info: "",
          image: tocantins,
        },
      ],
    },
    {
      name: "Nordeste",
      info: "",
      banner: nordeste_banner,
      states: [
        {
          name: "Alagoas",
          capital: "Maceió",
          info: "",
          image: alagoas,
        },
        {
          name: "Bahia",
          capital: "Salvador",
          info: "",
          image: bahia,
        },
        {
          name: "Ceará",
          capital: "Fortaleza",
          info: "",
          image: ceara,
        },
        {
          name: "Maranhão",
          capital: "São Luís",
          info: "",
          image: maranhao,
        },
        {
          name: "Paraíba",
          capital: "João Pessoa",
          info: "",
          image: paraiba,
        },
        {
          name: "Pernambuco",
          capital: "Recife",
          info: "",
          image: pernambuco,
        },
        {
          name: "Piauí",
          capital: "Teresina",
          info: "",
          image: piaui,
        },
        {
          name: "Rio Grande do Norte",
          capital: "Natal",
          info: "",
          image: rio_grande_do_norte,
        },
        {
          name: "Sergipe",
          capital: "Aracaju",
          info: "",
          image: sergipe,
        },
      ],
    },
    {
      name: "Centro-Oeste",
      info: "",
      banner: centro_oeste_banner,
      estados: [
        {
          name: "Distrito Federal",
          capital: "Brasília",
          info: "",
          image: df,
        },
        {
          name: "Goiás",
          capital: "Goiânia",
          info: "",
          image: goias,
        },
        {
          name: "Mato Grosso",
          capital: "Cuiabá",
          info: "",
          image: mato_grosso,
        },
        {
          name: "Mato Grosso do Sul",
          capital: "Campo Grande",
          info: "",
          image: mato_grosso_do_sul,
        },
      ],
    },
    {
      name: "Sudeste",
      info: "",
      banner: sudeste_banner,
      states: [
        {
          name: "Espírito Santo",
          capital: "Vitória",
          info: "",
          image: espirito_santo,
        },
        {
          name: "Minas Gerais",
          capital: "Belo Horizonte",
          info: "",
          image: minas,
        },
        {
          name: "Rio de Janeiro",
          capital: "Rio de Janeiro",
          info: "",
          image: rio,
        },
        {
          name: "São Paulo",
          capital: "São Paulo",
          info: "",
          image: sao_paulo,
        },
      ],
    },
    {
      name: "Sul",
      info: "",
      banner: sul_banner,
      states: [
        {
          name: "Paraná",
          capital: "Curitiba",
          info: "",
          image: parana,
        },
        {
          name: "Santa Catarina",
          capital: "Florianópolis",
          info: "",
          image: santa_catarina,
        },
        {
          name: "Rio Grande do Sul",
          capital: "Porto Alegre",
          info: "",
          image: rio_grande_do_sul,
        },
      ],
    },
  ],
};
export default data;
