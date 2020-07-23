
let heathScore=new Array(89,120,103)
let zenScore=new Array(116,94,123)
let totalSum1=0
for(let i in heathScore){ 
    totalSum1+=heathScore[i]
}
let averageHeath=totalSum1/heathScore.length
let totalSum2=0
for(let i in zenScore){ 
    totalSum2+=zenScore[i]
}
let averageZen=totalSum2/zenScore.length
let comparisonScore=(averageHeath>averageZen) ? `Heath is Winner with average points of ${averageHeath}` : `Zen is winner with average points of ${averageZen}`
console.log(comparisonScore)

console.log('----------Heath scores got changed---------------')
let newHeath = [...heathScore,220]
let newSum=0
for(let i in newHeath){
    newSum+=newHeath[i]
}
let averageNew=newSum/newHeath.length

let comparisonScore2=(averageNew>averageZen) ? `Heath is Winner with average points of ${averageNew}` : `Zen is winner with average points of ${averageZen}`
console.log(comparisonScore2)

if(averageZen===averageNew){
    console.log('Score is same of both teams')
}

console.log('-------Maria enters------------')

let mariaScore=new Array(97,134,105)
let mariaSum=0
for(let i in mariaScore){ 
    mariaSum+=mariaScore[i]
}
let averageMaria=mariaSum/mariaScore.length

if((averageHeath>averageMaria) && (averageHeath>averageZen))
console.log(`Heath is winner with points ${averageHeath}`)

if((averageZen>averageMaria) && (averageZen>averageHeath))
console.log(`Zen is winner with points ${averageZen}`)
else{
    console.log(`Maria is winner with points ${averageMaria}`)
}