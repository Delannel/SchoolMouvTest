/*
  Les Plaines grouilles de nuisibles, parfois seuls et faibles, parfois forts, et parfois en
  trop grand nombre. Il va falloir trouver la meilleure stratégie à adopter, combattre, ou fuir!

  Exercice : Votre personnage a 20 points de vie, votre arme fait 5 dégâts, votre 
  bouclier diminue les dégâts subi de 2. Les monstres, n'ont pas de boucliers, et 
  sont représentés comme ci [points de vie, dégâts] (ex: [15, 3] le monste a 15 points de vie et fait
  3 de dégats). 
  Les combats sont découpés en tours, à chaque tour, le héros et le(s) monstre(s) 
  attaquent une fois (les points de vie de chacun baissent). Si un monstre à 0 ou moins de vie,
  il meurt et n'attaque donc pas pour le tour, même chose pour le héros. Si il n'y plus de monstre,
  le héros remporte la victoire. Le héros ne peut taper qu'un seul monstre à la fois mais 
  il choisit celui qui frappe le plus fort si il y'en a un. C'est toujours lui qui attaque en premier.

  Complétez la fonction engagerLeCombat qui doit retourner true si le héros devrait gagner
  le combat, false si il doit fuir!
*/

function engagerLeCombat(monstres) { 
  let hp = 20
  const damage = 5
  const shield = 2
  let countmob = 0
  let priority
  if (typeof monstres[0] === 'number') {
     while ( hp > 0 && monstres[0] > 0) {
      monstres[0] -= damage 
      if (monstres[0] > 0 ) {
        hp -= (monstres[1] - shield )
      }
    }
  }   
  else {
    for ( let monstre of monstres) {
      countmob ++
    }
    if (countmob === 2 ) {
      if ( monstres[0][1] >= monstres[1][1] ) {
      priority = 0
      }
      else {
        priority = 1
      }
      while( hp > 0 && (monstres[0][0] > 0 || monstres[1][0] > 0) ) {
        if (monstres[0][0] > 0 && monstres[1][0] > 0){
           monstres[priority][0] -= damage
        }
        else {
          if (monstres[0][0] <= 0) {
            monstres[1][0] -= damage
          }
          else {
            monstres[0][0] -= damage
          }
        }
        for ( let monstre of monstres ) {
          if (monstre[0] > 0) {
            hp -= (monstre[1] - shield)
          }
        }
      }
    }
    else if (countmob === 4 ) {
      while (hp > 0 && (monstres[0][0] > 0 || monstres[1][0] > 0 || monstres[2][0] > 0 || monstres[3][0] > 0)) {
        if (monstres[0][0] > 0) {
          monstres[0][0] -= damage
        } else if (monstres[1][0] > 0) {
          monstres[1][0] -= damage
        } else if (monstres[2][0] > 0) {
          monstres[2][0] -= damage
        } else {
          monstres[3][0] -= damage
        }
        for (let monstre of monstres ) {
          if (monstre[0] > 0) {
            hp -= (monstre[1] - shield)
          }
        }
      }
    }
  }
  if(hp > 0) {
    return true
  } else return false
}

const monstre1 = [10, 3];
const monstre2 = [[15, 3], [12, 6]];
const monstre3 = [[6, 3], [6, 3], [6, 3], [6, 3]];
const monstre4 = [[20, 5], [20, 5]];

console.log(
  'Monstre 1 : ' + (engagerLeCombat(monstre1) === true ? 'OK' : 'KO'),
);
console.log(
  'Monstre 2 : ' + (engagerLeCombat(monstre2) === true ? 'OK' : 'KO'),
);
console.log(
  'Monstre 3 : ' + (engagerLeCombat(monstre3) === true ? 'OK' : 'KO'),
);
console.log(
  'Monstre 4 : ' + (engagerLeCombat(monstre4) === false ? 'OK' : 'KO'),
);

/* 
  Après avoir survécu à cet enfer, vous arrivez enfin devant les portes de la
  belle ville de Tolosa. Mais deux gardes semblent bloquer l'entrée principale...
*/