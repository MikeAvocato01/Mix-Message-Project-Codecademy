function returnRandQuote() {
    const quotes = ['“Age isn’t how old you are but how old you feel.”',
                    '“No medicine cures what happiness cannot.”', 
                    '“What matters in life is not what happens to you but what you remember and how you remember it.”', 
                    '“It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.”', 
                    '“A true friend is the one who holds your hand and touches your heart.”', 
                    '“It is life, more than death, that has no limits.”', 
                    '“There is always something left to love.”', 
                    '“He who awaits much can expect little.”', 
                    '“The heart\'s memory eliminates the bad and magnifies the good.”', 
                    '“No matter what, nobody can take away the dances you\'ve already had.”' 
];

let rn = Math.floor(Math.random() * 10); 

return quotes[rn]; 
}; 

function randQuote() {
    const elementNode = document.getElementById('element'); 
    elementNode.textContent = returnRandQuote(); 
}

