// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
      const indRand = Math.floor(Math.random() * this.dna.length);
      let baseNew = returnRandBase();
      while (this.dna[indRand] === baseNew){
        baseNew = returnRandBase();
      }
      this.dna[indRand] = baseNew;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    willLikelySurvive(){
      const numCorG = () => this.dna.filter(element => element === 'C' || element === 'G');
      return numCorG.length/this.dna.length >= 0.6;
    },
  }
};


let arr1 = mockUpStrand();
const virus1 = pAequorFactory(2, arr1);

let arr2 = mockUpStrand();
const virus2 = pAequorFactory(4, arr2);

//console.log(arr1);
//console.log(arr2);

//console.log(virus1.mutate());

//virus1.compareDNA(virus2);

//let dna = mockUpStrand();

//console.log(dna);

//console.log(pAequorFactory.dna);

//console.log(virus1.willLikelySurvive());
//console.log(virus2.willLikelySurvive());


