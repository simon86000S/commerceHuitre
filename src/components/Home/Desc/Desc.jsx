import React from "react";
import "../Desc/Desc.scss";

import huitre from "../../assets/img/huitre2.jpg";

export default function Desc() {
  return (
    <div className="Desc">
      <div className="text">
        <h1>
          <img src={huitre}></img>Nos variétés d’huitre en ligne
        </h1>

        <p>
          Nos huîtres sont vendues sous l’appellation "Marennes Oléron"
          (Indication Géographique Protégée). Elles sont toutes produites sur
          l’ile de Ré par notre fournisseur : La Cabane Océane, un ostréiculteur
          qui fournit de nombreux restaurants aux alentours. Nous proposons 3
          variétés d’huîtres : les fines de clair : leur affinage en marais dure
          au moins 21 jours (elles sont un peu plus douces que les huîtres
          pleine mer), les spéciales : leur taux de chair est supérieur à la
          moyenne (plus charnues), les plates : il s’agit d’huîtres sauvages
          pêchées dans les pertuis. Nos garanties La qualité des huîtres
          produites par notre partenaire ostréiculteur, La Cabane Océane, est
          reconnue sur toute l’ile de Ré. Elles ont un goût unique qui ravira
          les amateurs de ces crustacés. Elles sont élevées pendant 3 années
          durant lesquelles elles font l’objet de toutes les attentions des
          ostréiculteurs afin de vous proposer des produits d’une très grande
          qualité gustative. Nous appliquons ces critères de production pour
          chaque huitre en ligne. Grâce à notre livraison en 24 – 48 heures,
          nous vous garantissons la fraicheur de votre commande. Il ne vous
          restera plus qu’à déguster vos huîtres natures, avec du citron, avec
          du vinaigre et des échalotes ou cuites selon une des recettes que vous
          aurez trouvées sur notre site. Nos conditions de vente Il est possible
          de commander vos bourriches à l’avance et de choisir le jour de la
          livraison. Nous vous recommandons de vous grouper lors de vos
          commandes afin de bénéficier de nos tarifs dégressifs à partir de la
          deuxième bourriche et en fonction du poids (pour les frais de port).
          Nous demandons un minimum de 48 huîtres par commande pour des raisons
          de logistique. Nous les expédions 24 à 48 heures après réception du
          paiement (sauf si vous avez choisi une date de livraison ultérieure).
          Nos huîtres peuvent être livrées dans toute la France métropolitaine
          ainsi qu’en Corse (avec un supplément pour le transport).
        </p>
      </div>
    </div>
  );
}
