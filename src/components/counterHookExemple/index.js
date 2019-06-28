import React, { useState, useEffect } from 'react'

// Voici un petit exemple d'utilisation des hooks,

//  avant de se plonger dans l'exemple, il y a un point
// que j'aimerai preciser, on ne l'a pas vu pendant nos cours,
// mais on peux rendre un composant via une fonction, les classe ne sont
// pas obligatoire pour rendre un composang

// petit exemple avec cette fonction

// const TextComponent = () => {
//   return(
//     <p>ce componsant ce rend</p>
//   )
// }

// l'exemple du dessus montre que l'on peux rendre un composant sans classe.
// la difference avec les classe et qu'on a pas acces au methode du cycles
// de vie (componentDidMount, componentDidUpdate...), il s'agit d'un composant
// dont toute la logique lui vient d'un composant parent, ou d'une fonction tierce
// importé.

// Une problematique ce pose avec les classes, lorsque le composant devient complexe,
// il devient parfois compliquer de gerer le cycle de vie, on ce retrouve avec des composant
// complexe qui font telles ou telles actions selons tel ou tel changement de props
//(souvenez vous de l'exemple avec le routeur et le fetch, on devait refetch 'manuellement'
// apres chaque changement de la props house, dans notre cas c'etait simple a gerer
// mais ce genre de comportement peux rapidement devenir dur a gerer)

// la reponse de React a cette problematique sont les hooks,
// les hooks sont des fonctions speciales, qui permettent d'integrer de la logique plus simplement
// dans nos composant.
// nous allons utiliser dans cette exemple des hooks mis a disposition par React, useState et useEffect

// nous allons etudier leur comportement et commnet les utiliser dans l'exemple ci dessous

const HookCounters = () => {
  // le hook useState sert a creer une state (comme dans un composant avec une classe)
  // La premiere chose que l'on remarque lors de la declaration du hook, c'est la
  // syntaxe assez particuliere, on a pu voir que les accolades {} permettent la destructuration
  // d'un objet, la syntaxe ci dessous permet la destructuration d'un tableau [],
  // nous allons decrypter pas pas cette ligne pour comprendre un peu mieu ce qui ce passe,
  // const [count, setCount] permet la destructuration du tableau, ou mais quel tableau ?
  // il y a quelque chose a savoir sur la structure de ce hook, useState retourn un le tableau
  // suivant [valeur, fonction qui altere la valeur], vu qu'il ne s'agit pas d'un objet, nous n'avons pas
  // de clé pour definir ce qui nous est retourné, cette syntaxe (const [count, setCount]), permet de nommer,
  // ce que retourne la case 0 et 1 du tableau (la case 0 etant la valeur
  // et 1 la fonction qui altere la valeur[valeur, fonction qui altere la valeur])
  // pour synthetiser ce paragraphe, on nomme simplement les valeurs retourner dans le tableau renvoyer par
  // useState pour pouvoir les utiliser dans notre composant.
  // regardons maintenant l'autre partie, on y retrouve la fonction useState(0), pourquoi 0 ? il s'agit de
  // la valeur initial qu'aura la state, ici en l'occurence il s'agira de count, qui sera initialisé a 0,
  // nous avons donc declarer notre state count a 0, ainsi que la fonction setCount, qui permettra d'alterer
  // cette state
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect est une autre sorte de hooks, qui permet d'effectuer des actions
  // apres que son hook ai été invoquer
  // ici un exemple simple, lorsque l'on incremente notre compteur,
  // on change le titre de la page, en indiquant le nombre de fois que l'utilisateur
  // a cliqué.
  useEffect(() => {
    // Update the document title using the browser API
    // il fait office de componentDidMount et de componentDidUpdate,
    // il se lance a l'initialisation du state, ainsi qu'a chaque changement,
    // on notera que sa facilite la gestion de ce qui ce passe sur la page,
    // si on reprend l'expemple d'harry potter cela nous aurait permit d'eviter
    // de faire un call API au componentDidMount et dans le componentDidUpdate
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      {/* en ce qui concerne l'utilisation de la fonction qui "altere" la state
      on remarque que c'est une fonction toute simple a laquelle on passe la nouvelle
      valeur de la state */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// Petite note avant de finir, vous avez pu remarquer que la state est un nombre,
// c'est aussi une des difference de useState et d'une state classique, vous
// decider du format de la state, ce n'est pas obligatoirement un objet

export default HookCounters
