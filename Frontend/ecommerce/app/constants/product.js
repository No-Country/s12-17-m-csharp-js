import { table1, table2, table3, table4 } from "@/public/assets/img/tables";
export const PRODUCT_BREADCRUM_ITEMS = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/supermarket",
    label: "Hogar",
  },
  {
    label: "Mesas",
  },
];

export const PRODUCT_INFORMATION = {
  category: "Muebles de hogar",
  name: "Mesa de Comedor Industrial",
  rating: 4.3,
  numReviews: 14,
  price: 57,
  productCondition: "Nuevo",
  stock: 5,
};

export const PRODUCT_IMAGES = {
  mainImage: table4,
  additionalImages: [table1, table2, table3],
};

export const PRODUCT_TABS = {
  description: (
    <div className="space-y-4">
      <p>
        Mesa industrial, realizada en hierro y madera, todo de primera calidad.
        Largo 140 cm, ancho 70 cm, altura 76-77 cm. Patas fabricadas en tubos
        estructurales de 60 mm de ancho, madera con nudos de 35 mm de espesor.
        Somos fabricantes. El precio incluye color de patas y tono de la tapa a
        elección. NO COBRAMOS GASTOS EXTRAS POR EMBALAJE Y ENVIO HASTA
        TRANSPORTE. Se hacen envíos a todo el país. La mesa se envía desarmada,
        con manual de instrucciones para armado, tornillos y topetinas de
        fieltro para las patas.
      </p>

      <p>
        TERMINACION: La madera primero es teñida del color elegido, luego
        impregnada y tratada con laca poliuretánica al agua de primera marca. La
        terminación puede ser mate o semimate (laca satinada) o bien brillante
        (laca brillante). No se cobra ningún costo extra por el tratamiento y
        terminación de la madera.
      </p>

      <p>
        FABRICACIÓN: Nuestros productos son elaborados artesanalmente. Cada uno
        es único por la variedad de colores y acabados posibles. No fabricamos
        en serie y no vendemos a revendedores. Todos los muebles son fabricados
        por mano de obra calificada en forma completamente artesanal. Según el
        pedido que realice, la fabricación demora entre 8 y 10 días.
      </p>

      <p>
        FACTURACION: Hacemos Factura &quot;A&quot; o &quot;B&quot;, somos IVA
      </p>

      <p>
        ENVÍOS: El transporte es un servicio tercerizado y coordina con vos la
        entrega. Si no podes recibir el producto en tu domicilio porque no hay
        nadie, recomendamos que solicites el envío a la sucursal del transporte
        o pedir que lo entreguen al portero si se trata de un edificio.
      </p>

      <p>
        ARMADO: La mesa se envía desarmada, para que pueda entrar en un ascensor
        o en la puerta de entrada de tu domicilio. El armado es simple, solo hay
        que colocar 8 tornillos sin necesidad de hacer agujeros en la madera.
      </p>

      <p>
        EMBALAJE: No cobramos costos de embalaje y despacho hasta el transporte.
        El producto se prepara todo envuelto con espuma de polietileno y cartón
        corrugado para que no se dañe.
      </p>

      <p>
        NOTA: El producto se envía desarmado, ya que por su tamaño no entra por
        la puerta de entrada de una casa o departamento. El armado es simple,
        con tornillos autoperforantes que no requieren hacer agujeros en la
        madera.
      </p>
    </div>
  ),
  reviews: (
    <div className="space-y-4">
      <p>Texto de prueba de calificaciones</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quia, quae, quibusdam voluptatem quos quod doloremque
        accusantium iusto voluptate doloribus! Quisquam voluptatum, quia, quae,
        quibusdam voluptatem quos quod doloremque accusantium iusto voluptate
        doloribus!
      </p>
    </div>
  ),
  questions: (
    <div className="space-y-4">
      <p>Texto de prueba de preguntas y respuestas</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quia, quae, quibusdam voluptatem quos quod doloremque
        accusantium iusto voluptate doloribus! Quisquam voluptatum, quia, quae,
        quibusdam voluptatem quos quod doloremque accusantium iusto voluptate
        doloribus!
      </p>
    </div>
  ),
};

export const PRODUCT_CARDS = [
  {
    id: 1,
    title: "Mesa de Centro",
    image: "/assets/img/tables/1.png",
    price: "$593.998",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque aspernatur perspiciatis doloremque voluptatem? Obcaecati hic iste excepturi optio. Atque sit eum, unde laboriosam eos tempore nulla ullam a accusantium.",
  },
  {
    id: 2,
    title: "Mesa de Comedor",
    image: "/assets/img/tables/2.png",
    price: "$1,200.000",
    description: "Descripción de la mesa de comedor",
  },
  {
    id: 3,
    title: "Mesa de Noche",
    image: "/assets/img/tables/3.png",
    price: "$300.000",
    description: "Descripción de la mesa de noche",
  },
  {
    id: 4,
    title: "Mesa de Jardín",
    image: "/assets/img/tables/4.png",
    price: "$800.000",
    description: "Descripción de la mesa de jardín",
  },
];
