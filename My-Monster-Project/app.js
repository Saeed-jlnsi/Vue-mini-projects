new Vue({
    el: '#app',
    data: {
        startGame: false,
        healthPercent1: 100,
        healthPercent2: 100,
        playerHealth: 100,
        monsterHealth: 100,
        showPoints: false,
        items: [],
        roundPoints: {},
        counter: 0,
        playerPoints: [],
        monsterPoints: [],
        healthAdd: 10,
        addHealth: 0,
        //text: ''
        //hitterName: '',
    },
    computed: {
        initialPercentage: function() {
            return {
                width: 100 + '%'
            };
        },
        playerHealthBar: function() {                
            return {
                width: (this.playerHealth) + '%'
            };
        },
        monsterHealthBar: function() {
            return {
                width: (this.monsterHealth) + '%'
            };
        }

    },
    methods: {
        newGame: function() {
            this.startGame = true;
        },
        attackResult: function() {
            
            this.showPoints = true;
            // Create new objects, to prevent overwritting the existing ones!
            this.roundPoints = {};
            this.monsterPoints = [];
            this.playerPoints = [];
            
            if( (this.healthPercent1 > 0) && (this.healthPercent2 > 0) ) {

            this.roundPoints['PLAYER HITS MONSTER FOR']= Math.floor(Math.random() * 11);
            this.playerPoints.push(this.roundPoints['PLAYER HITS MONSTER FOR']);
            this.healthPercent1 = this.healthPercent1 - this.playerPoints;
            this.monsterHealth = this.healthPercent1;
            
            this.roundPoints['MONSTER HITS PLAYER FOR']= Math.floor(Math.random() * 11);
            this.monsterPoints.push(this.roundPoints['MONSTER HITS PLAYER FOR']);   
            this.healthPercent2 = this.healthPercent2 - this.monsterPoints;
            this.playerHealth = this.healthPercent2;

            this.items.push(this.roundPoints);

            }else {
                if( this.healthPercent2 == 0 || this.healthPercent2 < 0) {
                    healthPercent1 = 100;
                    alert('The monster win, Start a new Game!');
                } else if(this.healthPercent2 == 0 || this.healthPercent2 < 0) {
                    healthPercent2 = 100;
                    alert('You win, Start a new Game!');
                }
            }
        },
        specialAttack: function() {

            this.showPoints = true;
            // Create new objects, to prevent overwritting the existing ones!
            this.roundPoints = {};
            this.monsterPoints = [];
            this.playerPoints = [];
            
            if( (this.healthPercent1 > 0) && (this.healthPercent2 > 0) ) {

            this.roundPoints['PLAYER HITS MONSTER FOR']= Math.floor(Math.random() * 11 + 20);
            this.playerPoints.push(this.roundPoints['PLAYER HITS MONSTER FOR']);
            this.healthPercent1 = this.healthPercent1 - this.playerPoints;
            this.monsterHealth = this.healthPercent1;
            
            this.roundPoints['MONSTER HITS PLAYER FOR']= Math.floor(Math.random() * 11 + 20);
            this.monsterPoints.push(this.roundPoints['MONSTER HITS PLAYER FOR']);   
            this.healthPercent2 = this.healthPercent2 - this.monsterPoints;
            this.playerHealth = this.healthPercent2;

            this.items.push(this.roundPoints);

            }else {
                if( this.healthPercent2 < 0) {
                    healthPercent1 = 100;
                    alert('The monster win, Start a new Game!');
                } else if(this.healthPercent1 < 0) {
                    healthPercent2 = 100;
                    alert('You win, Start a new Game!');
                }
            }
        },
        healthResult: function() {
            this.showPoints = true;
            
            if(this.healthPercent2 <= 90) {
            
            this.healthPercent2 = this.healthPercent2 + this.healthAdd;
            this.playerHealth = this.healthPercent2;

            }else if(this.healthPercent2 > 90 && this.healthPercent2 != 100) {
                this.addHealth = 100 - this.playerHealth;
                this.healthPercent2 = this.healthPercent2 + this.addHealth;
                this.playerHealth = this.healthPercent2;

            }else {
                alert('Your Health is Max, Hit the Monster');
            }
        },
        giveUp: function() {
            alert('Game Over, try again!');
            this.healthPercent1 = 100;
            this.playerHealth = this.healthPercent1;
            this.healthPercent2 = 100;
            this.monsterHealth = this.healthPercent2;
            this.showPoints = false;
            // Line Below is Optional
            this.startGame = false;
        }
    }
});

// I DID IT! CONGRATUATION SAEED !!!




//console.log(this.monsterPoints);
//console.log(this.healthPercent2);



// saeed: function() {
//     this.healthPercent = Number(this.healthPercent - this.playerPoints);
//     console.log('hello i am here');
// }

// // Debug commands
// console.log(Object.values(this.roundPoints));
// console.log(this.monsterHealth);
// console.log('this is healthPercent: ' + this.healthPercent);
// console.log('this is monsterPoints: ' + this.monsterPoints);


// //Debug commands
// console.log(Object.values(this.roundPoints));
// console.log(this.playerHealth);
// console.log('this is healthPercent: ' + this.healthPercent);
// console.log('this is playerPoints: ' + this.playerPoints);
// console.log(this.healthPercent);


// console.log(Object.keys(this.playerObject));

// testPoints: [
//     { player: '10', monster: '5' },
//     { player: 4, monster: 9 },
//     { player: 6, monster: 3 },
//     { player: 1, monster: 7 } ,   
// ],

            
// console.log(this.playerObject);
// console.log(this.monsterObject);
// console.log(this.items);
    
// this.playerPoints.push(Math.floor(Math.random() * 11));
// console.log(this.playerPoints[this.counter])
// console.log(this.healthPercent - this.playerPoints[this.counter]);
// this.monsterPoints.push(Math.floor(Math.random() * 11));

// correctText: function () {
//     if(this.playerObject.key == 'player') {
//         text = 'PLAYER HITS MONSTER FOR';
//         console.log('I am here');
//     }else {
//         text = 'MONSTER HITS PLAYER FOR';
//         console.log('I am here again');
//     };
// }  


// playerText: function() {
//     return {
//         text: 'PLAYER HITS MONSTER FOR'
//     };
// },
// monsterText: function() {
//     return {
//         text: 'MONSTER HITS PLAYER FOR'
//     };
// }