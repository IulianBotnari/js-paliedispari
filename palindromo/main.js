




    
    function parolaPalindroma(word) {
        
        
        let reverseString = word.split('').reverse().join('')
        
        if (word === reverseString) {
            console.log("e palindroma");
            
            
        } else {
            console.log("non lo e");
            
        }
    }
    
    
    let insertWord = prompt("Inserisci parola")
    
    let word1 = parolaPalindroma(insertWord)


