//Stats Variables
let spins = 0;
let spending = 0;
//Items Variables
let milSpec = '';
let restricted = '';
let classified = '';
let covert = '';
let exceedinglyRare = '';
//Exceedingly Rare prompt
let exceedinglyRareTrigger = false;

//Stats Tracker
function renderStats(){
    document.getElementById("spins").innerHTML = spins;

    document.getElementById("spending").innerHTML = spending;

    document.getElementById("milSpec").innerHTML = milSpec;

    document.getElementById("restricted").innerHTML = restricted;

    document.getElementById("classified").innerHTML = classified;

    document.getElementById("covert").innerHTML = covert;

    document.getElementById("exceedinglyRare").innerHTML = exceedinglyRare;
}

//call render when page loads
renderStats();

//Event listener to spin button
document.getElementById("btn csgo-spin").addEventListener("click", spin);

//Event listener to auto calculate button
document.getElementById("btn csgo-auto-spin").addEventListener("click", autoSpin);

//Event Listener to disable auto spin button once clicked
document.getElementById("btn csgo-auto-spin").addEventListener("click", disableButton);

//Event listener to refresh play again button
document.getElementById("btn play-again").addEventListener("click", refreshGame);

//Hiding play again button 
document.getElementById("btn play-again").style.visibility = "hidden";

//spin function
function spin (){
    // generate one random number from 4000
    let randomNumber = Math.floor(Math.random() * 4001);
        if(randomNumber <= 3196){
            milSpec ++;
        }
        else if(randomNumber > 3196 && randomNumber <= 3835){
            restricted ++;
        }
        else if(randomNumber > 3835 && randomNumber <= 3963){
            classified ++;
        }
        else if(randomNumber > 3963 && randomNumber <= 3988){
            covert ++;
        }
        else{
            exceedinglyRare ++;
            exceedinglyRareItemRoll();
        }
    spins++;
    spending +=2;

    renderStats();
}

//auto spin until unlocks a Special / Exceedingly Rare Item
// function autoSpin(){
//     while(exceedinglyRareTrigger === false){
//         spin();
//     }
// }

//Auto Spin until Exceedingly Rare Item is unlocked
let autoSpinInteral;
function autoSpin(){
    while(exceedinglyRareTrigger != true){
        autoSpinInteral = setInterval(spin, 10);
        return;
        
    }
    autoSpinInteral = clearInterval(autoSpinInteral);
}

// Disable auto spin button once clicked 
function disableButton(){
    let btn = document.getElementById("btn csgo-auto-spin");
    btn.disabled = true;
}

// Re-enable auto spin button
function enableButton(){
    let btn = document.getElementById("btn csgo-auto-spin");
    btn.disabled = false;  
}

//Message for when one unlocks a Special / Exceedingly Rare Item
function congratsMessage(){
    let congratsMessage = document.getElementById("message");
        congratsMessage.textContent = `Congrats! After spending $${spending + 2} you managed
        to uncase an Exceedingly Rare Item`; 
}

// Hides open case and auto spin button
function hideButtons(){
    document.getElementById("btn csgo-spin").style.visibility = "hidden";
    document.getElementById("btn csgo-auto-spin").style.visibility = "hidden";
    document.getElementById("btn play-again").style.visibility = "visible";
}

// Restards the game 
function refreshGame() {
    spins = 0;
    spending = 0;
    milSpec = '';
    restricted = '';
    classified = '';
    covert = '';
    exceedinglyRare = '';
    exceedinglyRareTrigger = false;
    autoSpinInteral = clearInterval(autoSpinInteral);

    document.getElementById("btn csgo-spin").style.visibility = "visible";
    document.getElementById("btn csgo-auto-spin").style.visibility = "visible";
    document.getElementById("btn play-again").style.visibility = "hidden";
    document.getElementById("message").innerHTML = '';
    document.getElementById("item-type").innerHTML = '';
    document.getElementById("skin-type").innerHTML = '';
    document.getElementById("quality-type").innerHTML = '';
    renderStats();
    enableButton();
}

// 50/50 roll to decide whether exceedingly rare item is knifes OR gloves
function exceedinglyRareItemRoll(){
    let itemDecision = Math.floor(Math.random() * 101);
        if(itemDecision <= 50){
            glovesRoll();
            exceedinglyRareTrigger = true;
            autoSpinInteral = clearInterval(autoSpinInteral);
            congratsMessage();
            hideButtons();
            console.log(itemDecision);
        }
        else{
            knivesRoll();
            exceedinglyRareTrigger = true;
            autoSpinInteral = clearInterval(autoSpinInteral);
            congratsMessage();
            hideButtons();
            console.log(itemDecision);
        }
}

//function for knives randomisation
function knivesRoll(){
    //Choose Knife Type
    let knifeType = knifeItems[Math.floor(Math.random() * knifeItems.length)];
    console.log(knifeType);
        // Roll 1 = Bayonet
        if(knifeType === "Bayonet"){
            // Randomise Bayonet Knife Skin from array
            let skinType = bayonetSkins[Math.floor(Math.random() * bayonetSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Knife it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;
        }
        // Roll 2 = Bowie Knife
        else if(knifeType === "Bowie Knife"){
            // Randomise Bowie Knife skin from array
            let skinType = bowieKnifeSkins[Math.floor(Math.random() * bowieKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            //Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;        
        }
        // Roll 3 = Butterfly Knife
        else if(knifeType === "Butterfly Knife"){
            // Randomise Butterfly Knife skin from array
            let skinType = butterflyKnifeSkins[Math.floor(Math.random() * butterflyKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;        
        }
        // Roll 4 = Falchion Knife
        else if(knifeType === "Falchion Knife"){
            // Randomise Falchion knife skin from array
            let skinType = falchionKnifeSkins[Math.floor(Math.random() * falchionKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        //Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 5 = Flip Knife
        else if(knifeType === "Flip Knife"){
            // Randomise Falchion knife skin from array
            let skinType = flipKnifeSkins[Math.floor(Math.random() * flipKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 6 = Gut Knife
        else if(knifeType === "Gut Knife"){
            // Randomise Gut Knife skin from array
            let skinType = gutKnifeSkins[Math.floor(Math.random() * gutKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 7 = Huntsman knife
        else if(knifeType === "Hunstsman Knife"){
            // Randomise Huntsman Knife skin from array
            let skinType = huntsmanKnifeSkins[Math.floor(Math.random() * huntsmanKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 8 = Karambit Knife
        else if(knifeType === "Karambit Knife"){
            // Randomise Karambit Knife skin from array
            let skinType = karambitSkins[Math.floor(Math.random() * karambitSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 9 = M9 Bayonet
        else if(knifeType === "M9 Bayonet"){
            // Randomise Bowie M9 Bayonet from array
            let skinType = m9BayonetSkins[Math.floor(Math.random() * m9BayonetSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 10 = Navaja Knife
        else if(knifeType === "Navaja Knife"){
            // Randomise Navaja Knife skin from array
            let skinType = navajaKnifeSkins[Math.floor(Math.random() * navajaKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 11 = Nomad Knife
        else if(knifeType === "Nomad Knife"){
            // Randomise Nomad Knife skin from array
            let skinType = nomadKnifeSkins[Math.floor(Math.random() * nomadKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 12 = Paracord Knife
        else if(knifeType === "Paracord Knife"){
            // Randomise Paracord Knife skin from array
            let skinType = paracordKnifeSkins[Math.floor(Math.random() * paracordKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 13 = Shadow Daggers
        else if(knifeType === "Shadow Daggers"){
            // Randomise Shadow Daggers skin from array
            let skinType = shadowDaggersSkins[Math.floor(Math.random() * shadowDaggersSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 14 = Skeleton Knife
        else if(knifeType === "Skeleton Knife"){
            // Randomise Skeleton Knife skin from array
            let skinType = skeletonKnifeSkins[Math.floor(Math.random() * skeletonKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 15 = Stiletto Knife
        else if(knifeType === "Stiletto Knife"){
            // Randomise Stiletto Knife skin from array
            let skinType = stilettoKnifeSkins[Math.floor(Math.random() * stilettoKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
        // Roll 16 = Survival Knife
        else if(knifeType === "Survival Knife"){
            // Randomise Survival Knife skin from array
            let skinType = survivalKnifeSkins[Math.floor(Math.random() * survivalKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;         
        }
        // Roll 17 = Talon Knie
        else if(knifeType === "Talon Knife"){
            // Randomise Talon Knife skin from array
            let skinType = talonKnifeSkins[Math.floor(Math.random() * talonKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        } 
        // Roll 18 = Ursus Knife
        else{
            // Randomise Ursus Knife skin from array
            let skinType = ursusKnifeSkins[Math.floor(Math.random() * ursusKnifeSkins.length)];
            console.log(skinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what knife it is 
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${knifeType}`;
                        // Display what skin it has 
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${skinType}`;
                            // Display the quality
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;           
        }
}

// Function for Gloves Roll - same principles as Knives roll
function glovesRoll(){
    //Choose Knife Type
    let gloveType = gloves[Math.floor(Math.random() * gloves.length)];
    console.log(gloveType);
        // Roll 1 = Bayonet
        if(gloveType === "Hand Wraps"){
            // Randomise Hand Wraps Skin from array
            let gloveSkinType = handWrapsSkins[Math.floor(Math.random() * handWrapsSkins.length)];
            console.log(gloveSkinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Gloves it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${gloveType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${gloveSkinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;
        }
        else if(gloveType === "Moto Gloves"){
                        // Randomise Moto Gloves  Skin from array
                        let gloveSkinType = motoGlovesSkins[Math.floor(Math.random() * motoGlovesSkins.length)];
                        console.log(gloveSkinType);
                            // Randomise the skin quality from array
                            let qualityType = quality[Math.floor(Math.random() * quality.length)];
                            console.log(qualityType);
                                // Display what Gloves it is
                                const itemDetails = document.getElementById("item-type");
                                itemDetails.textContent = `Item: ${gloveType}`;
                                    // Display what skin it has
                                    const itemSkin = document.getElementById("skin-type");
                                    itemSkin.textContent = `Skin: ${gloveSkinType}`;
                                        // Display the quality 
                                        const itemQuality = document.getElementById("quality-type");
                                        itemQuality.textContent = `Quality: ${qualityType}`;   
        }
        else if(gloveType === "Specialist Gloves"){
            // Randomise Specialist Gloves  Skin from array
            let gloveSkinType = specialistGlovesSkins[Math.floor(Math.random() * specialistGlovesSkins.length)];
            console.log(gloveSkinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Gloves it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${gloveType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${gloveSkinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;   
        }
        else if(gloveType === "Sport Gloves"){
                        // Randomise Sport Gloves  Skin from array
                        let gloveSkinType = sportGlovesSkins[Math.floor(Math.random() * sportGlovesSkins.length)];
                        console.log(gloveSkinType);
                            // Randomise the skin quality from array
                            let qualityType = quality[Math.floor(Math.random() * quality.length)];
                            console.log(qualityType);
                                // Display what Gloves it is
                                const itemDetails = document.getElementById("item-type");
                                itemDetails.textContent = `Item: ${gloveType}`;
                                    // Display what skin it has
                                    const itemSkin = document.getElementById("skin-type");
                                    itemSkin.textContent = `Skin: ${gloveSkinType}`;
                                        // Display the quality 
                                        const itemQuality = document.getElementById("quality-type");
                                        itemQuality.textContent = `Quality: ${qualityType}`;   
        }
        else if(gloveType === "Bloodhount Gloves"){
            // Randomise Bloodhound Gloves  Skin from array
            let gloveSkinType = bloodhoundGlovesSkins[Math.floor(Math.random() * bloodhoundGlovesSkins.length)];
            console.log(gloveSkinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Gloves it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${gloveType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${gloveSkinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;   
        }
        else if(gloveType === "Hydra Gloves"){
            // Randomise Hydra Gloves  Skin from array
            let gloveSkinType = hydraGlovesSkins[Math.floor(Math.random() * hydraGlovesSkins.length)];
            console.log(gloveSkinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Gloves it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${gloveType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${gloveSkinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;   
        }
        else if(gloveType === "Broken Fang Gloves"){
            // Randomise Broken Fang Gloves  Skin from array
            let gloveSkinType = brokenFangGlovesSkins[Math.floor(Math.random() * brokenFangGlovesSkins.length)];
            console.log(gloveSkinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Gloves it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${gloveType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${gloveSkinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;   
        }
        else {
            // Randomise Driver Gloves  Skin from array
            let gloveSkinType = driverGlovesSkins[Math.floor(Math.random() * driverGlovesSkins.length)];
            console.log(gloveSkinType);
                // Randomise the skin quality from array
                let qualityType = quality[Math.floor(Math.random() * quality.length)];
                console.log(qualityType);
                    // Display what Gloves it is
                    const itemDetails = document.getElementById("item-type");
                    itemDetails.textContent = `Item: ${gloveType}`;
                        // Display what skin it has
                        const itemSkin = document.getElementById("skin-type");
                        itemSkin.textContent = `Skin: ${gloveSkinType}`;
                            // Display the quality 
                            const itemQuality = document.getElementById("quality-type");
                            itemQuality.textContent = `Quality: ${qualityType}`;   
        }
}


// Arrays:

// Skin Condition
const quality = [
    "Factory New",
    "Minimal Wear",
    "Field Tested",
    "Well Worn",
    "Battle Scarred"
]

// Knives List
const knifeItems = [
    "Bayonet",
    "Bowie Knife",
    "Butterfly Knife",
    "Falchion Knife",
    "Flip Knife",
    "Gut Knife",
    "Hunstsman Knife",
    "Karambit Knife",
    "M9 Bayonet",
    "Navaja Knife",
    "Nomad Knife",
    "Paracord Knife",
    "Shadow Daggers",
    "Skeleton Knife",
    "Stiletto Knife",
    "Survival Knife",
    "Talon Knife",
    "Ursus Knife"
]

// Bayonet Skins
const bayonetSkins = [
    "Doppler",
    "Gamma Doppler",
    "Autotronic",
    "Bright Water",
    "Lore",
    "Damascus Steel",
    "Freehand",
    "Black Laminate",
    "Slaughter",
    "Scorched",
    "Tiger Tooth",
    "Case Hardened",
    "Crimson Web",
    "Blue Steel",
    "Ultraviolet",
    "Fade",
    "Boreal Forest",
    "Night",
    "Marble Fade",
    "Urban Masked",
    "Forest DDPAT",
    "Stained",
    "Rust Coat",
    "Safari Mesh",
    "Vanilla"
]

// Bowie Knife Skins
const bowieKnifeSkins = [
    "Doppler",
    "Gamma Doppler",
    "Autotronic",
    "Bright Water",
    "Lore",
    "Damascus Steel",
    "Freehand",
    "Black Laminate",
    "Slaughter",
    "Scorched",
    "Tiger Tooth",
    "Case Hardened",
    "Crimson Web",
    "Blue Steel",
    "Ultraviolet",
    "Fade",
    "Boreal Forest",
    "Night",
    "Marble Fade",
    "Urban Masked",
    "Forest DDPAT",
    "Stained",
    "Rust Coat",
    "Safari Mesh",
    "Vanilla"
]

// Butterfly Knife Skins
const butterflyKnifeSkins = [
    "Gamma Doppler Emerald",
    "Doppler Sapphire",
    "Doppler Ruby",
    "Crimson Web",
    "Lore",
    "Doppler Black Pearl",
    "Ultraviolet",
    "Fade",
    "Gamma Doppler Phase 4",
    "Autotronic",
    "Gamma Doppler Phase 2",
    "Doppler Phase 4",
    "Marble Fade",
    "Doppler Phase 2",
    "Gamma Doppler Phase 3",
    "Gamma Doppler Phase 1",
    "Doppler Phase 1",
    "Vanilla",
    "Doppler Phase 3",
    "Slaughter",
    "Tiger Tooth",
    "Night",
    "Black Laminate",
    "Bright Water",
    "Freehand",
    "Damascus Steel",
    "Case Hardened",
    "Blue Steel",
    "Urban Masked",
    "Forest DDPAT",
    "Boreal Forest",
    "Stained",
    "Scorched",
    "Rust Coat",
    "Safari Mesh"
]

// Falchion Knife Skins
const falchionKnifeSkins = [
    "Marble Fade",
    "Autotronic",
    "Gamma Doppler",
    "Doppler",
    "Black Laminate",
    "Freehand",
    "Bright Water",
    "Safari Mesh",
    "Case Hardenened",
    "Ultraviolet",
    "Lore",
    "Tiger Tooth",
    "Scorched",
    "Damascus Steel",
    "Night",
    "Rust Coat",
    "Forest DDPAT",
    "Boreal Forest",
    "Stained",
    "Vanilla",
    "Blue Steel",
    "Crimson Web",
    "Fade",
    "Urban Masked",
    "Slaughter"
]

// Flip Knife Skins
const flipKnifeSkins = [
    "Tiger Tooth",
    "Doppler",
    "Marble Fade",
    "Lore",
    "Autotronic",
    "Fade",
    "Freehand",
    "Damascus Steel",
    "Slaughter",
    "Stained",
    "Blue Steel",
    "Ultra Violet",
    "Crimson Web",
    "Bright Water",
    "Boreal Forest",
    "Scorched",
    "Forest DDPAT",
    "Urban Masked",
    "Black Laminate",
    "Safari Mesh",
    "Case Hardened",
    "Rust Coat",
    "Night",
    "Vanilla",
    "Gamma Doppler"
] 

// Gut Knife Skins
const gutKnifeSkins = [
    "Doppler",
    "Autotronic",
    "Black Laminate",
    "Lore",
    "Gamma Doppler",
    "Bright Water",
    "Ultraiolet",
    "Freehand",
    "Tiger Tooth",
    "Marble Fade",
    "Boreal Forest",
    "Slaughter",
    "Rust Coat",
    "Night",
    "Scorched",
    "Case Hardened",
    "Safari Mesh",
    "Crimson Web",
    "Urban Masked",
    "Damascus Steel",
    "Forest DDPAT",
    "Blue Steel",
    "Vanilla",
    "Fade",
    "Stained"
]

// Huntsman Knife Skins
const huntsmanKnifeSkins = [
    "Black Laminate",
    "Tiger Tooth",
    "Lore",
    "Marble Fade",
    "Gamma Doppler",
    "Doppler",
    "Damascus Steel",
    "Freehand",
    "Rust Coat",
    "Autotronic",
    "Slaughter",
    "Stained",
    "Ultraviolet",
    "Night",
    "Bright Water",
    "Vanilla",
    "Scorched",
    "Forest DDPAT",
    "Blue Steel",
    "Boreal Forest",
    "Crimson Web",
    "Safari Mesh",
    "Urban Masked",
    "Case Hardened",
    "Fade"
]

// Karambit Knife Skins
const karambitSkins = [
    "Doppler",
    "Slaughter",
    "Tiger Tooth",
    "Lore",
    "Gamma Doppler",
    "Bright Water",
    "Stained",
    "Firest DDPAT",
    "Case Hardened",
    "Ultraviolet",
    "Night",
    "Freehand",
    "Urban Masked",
    "Vanilla",
    "Safari Mesh",
    "Scorched",
    "Crimson Web",
    "Boreal Forest",
    "Autotronic",
    "Black Laminate",
    "Rust Coat",
    "Damascus Steel",
    "Blue Steel",
    "Marble Fade",
    "Fade"
]

// M9 Bayonet Skins
const m9BayonetSkins = [
    "Doppler",
    "Autotronic",
    "Scorched",
    "Boreal Forest",
    "Tiger Tooth",
    "Damascus Steel",
    "Case Hardened",
    "Marble Fade",
    "Urban Masked",
    "Forest DDPAT",
    "Stained",
    "Lore",
    "Blue Steel",
    "Freehand",
    "Bright Water",
    "Night",
    "Rust Coat",
    "Safari Mesh",
    "Vanilla",
    "Ultraviolet",
    "Crimson Web",
    "Black Laminate",
    "Slaughter",
    "Gamma Doppler",
    "Fade"
]

// Navaja Knife Skins
const navajaKnifeSkins = [
    "Tiger Tooth",
    "Marble Fade",
    "Doppler",
    "Ultraviolet",
    "Vanilla",
    "Scorched",
    "Damascus Steel",
    "Blue Steel",
    "Slaughter",
    "Fade",
    "Boreal Forest",
    "Safari Mesh",
    "Urvan Masked",
    "Rust Coat",
    "Night Stripe",
    "Forest DDPAT",
    "Stained",
    "Crimson Web",
    "Case Hardened"
]

// Nomad Knife Skins
const nomadKnifeSkins = [
    "Crimson Web",
    "Case Hardened",
    "Fade",
    "Slaughter",
    "Vanilla",
    "Scorched",
    "Blue Steel",
    "Safari Mesh",
    "Stained",
    "Forest DDPAT",
    "Night Stripe",
    "Urban Masked",
    "Boreal Forest"
]

// Paracord Knife Skins
const paracordKnifeSkins = [
    "Forest DDPAT",
    "Slaughter",
    "Safari Mesh",
    "Blue Steel",
    "Case Hardened",
    "Urban Masked",
    "Night Stripe",
    "Boreal Forest",
    "Scorched",
    "Fade",
    "Vanilla",
    "Crimson Web",
    "Stained"
]

// Shadow Daggers Skins
const shadowDaggersSkins = [
    "Freehand",
    "Marble Fade",
    "Gamma Doppler",
    "Tiger Tooth",
    "Ultraviolet",
    "Rust Coat",
    "Autotronic",
    "Bright Water",
    "Damascus Steel",
    "Urban Masked",
    "Lore",
    "Doppler",
    "Black Laminate",
    "Scorched",
    "Blue Steel",
    "Vanilla",
    "Fade",
    "Slaughter",
    "Night",
    "Crimson Web",
    "Boreal Forest",
    "Stained",
    "Forest DDPAT",
    "Safari Mesh",
    "Case Hardened"
]

// Skeleton Knife Skins
const skeletonKnifeSkins = [
    "Case Hardened",
    "Forest DDPAT",
    "Blue Steel",
    "Stained",
    "Urban Masked",
    "Vanilla",
    "Safari Mesh",
    "Night Stripe",
    "Scorched",
    "Boreal Forest",
    "Crimson Web",
    "Slaughter",
    "Fade"
]

// Stiletto Knife Skins
const stilettoKnifeSkins = [
    "Doppler",
    "Case Hardened",
    "Stained",
    "Ultraviolet",
    "Damascus Steel",
    "Night Stripe",
    "Slaughter",
    "Vanilla",
    "Boreal Forest",
    "Marble Fade",
    "Urban Masked",
    "Forest DDPAT",
    "Tiger Tooth",
    "Blue Steel",
    "Safari Mesh",
    "Scorched",
    "Rust Coat",
    "Crimson Web",
    "Fade"
]

// Survival Knife Skins
const survivalKnifeSkins = [
    "Case Hardened",
    "Stained",
    "Night Stripe",
    "Slaughter",
    "Vanilla",
    "Boreal Forest",
    "Forest DDPAT",
    "Blue Steel",
    "Safari Mesh",
    "Scorched",
    "Crimson Web",
    "Fade"
]

// Talon Knife Skins
const talonKnifeSkins = [
    "Doppler",
    "Case Hardened",
    "Stained",
    "Ultraviolet",
    "Damascus Steel",
    "Night Stripe",
    "Slaughter",
    "Vanilla",
    "Boreal Forest",
    "Marble Fade",
    "Urban Masked",
    "Forest DDPAT",
    "Tiger Tooth",
    "Blue Steel",
    "Safari Mesh",
    "Scorched",
    "Rust Coat",
    "Crimson Web",
    "Fade"
]

// Ursus Knife Skins 
const ursusKnifeSkins = [
    "Doppler",
    "Case Hardened",
    "Stained",
    "Ultraviolet",
    "Damascus Steel",
    "Night Stripe",
    "Slaughter",
    "Vanilla",
    "Boreal Forest",
    "Marble Fade",
    "Urban Masked",
    "Forest DDPAT",
    "Tiger Tooth",
    "Blue Steel",
    "Safari Mesh",
    "Scorched",
    "Rust Coat",
    "Crimson Web",
    "Fade"
]

//Gloves List
const gloves = [
    "Hand Wraps",
    "Moto Gloves",
    "Specialist Gloves",
    "Sport Gloves",
    "Bloodhound Gloves",
    "Hydra Gloves",
    "Broken Fang Gloves",
    "Driver Gloves"
]

const handWrapsSkins = [
    "Leather",
    "Slaughter",
    "Badlands",
    "Spruce DDPAT",
    "Duct Tape",
    "Cobalt Skulls",
    "Overprint",
    "Arboreal",
    "CAUTION!",
    "Constrictor",
    "Giraffe",
    "Desert Shamagh"
]

const motoGlovesSkins = [
    "Eclipse",
    "Spearmint",
    "Boom!",
    "Cool Mint",
    "Transport",
    "Polygon",
    "POW!",
    "Turtle",
    "Finish Line",
    "Blood Pressure",
    "3rd Commando Company",
    "Smoke Out"
]

const specialistGlovesSkins = [
    "Forest+DDPAT",
    "Emerald Web",
    "Crimson Kimono",
    "Foundation",
    "Fade",
    "Buckshot",
    "Crimson Web",
    "Mogul",
    "Marble Fade",
    "Tiger Strike",
    "Lt. Commander",
    "Field Agent"
]

const sportGlovesSkins = [
    "Hedge Maze",
    "Superconductor",
    "Arid",
    "Pandora's Box",
    "Bronze Morph",
    "Amphibious",
    "Vice",
    "Omega",
    "Slingshot",
    "Scarlet Shamagh",
    "Big Game",
    "Nocts"
]

const bloodhoundGlovesSkins = [
    "Snakebite",
    "Bronzed",
    "Guerrilla",
    "Charred"
]

const hydraGlovesSkins = [
    "Emerald",
    "Case Hardened",
    "Rattler",
    "Mangrove"
]

const brokenFangGlovesSkins = [
    "Jade",
    "Yellow Banded",
    "Needle Point",
    "Unhinged"
]

const driverGlovesSkins = [
    "Convoy",
    "Crimson Weave",
    "Diamondback",
    "Lunar Weave",
    "Racing Green",
    "Overtake",
    "King Snake",
    "Imperial Plaid",
    "Snow Leopard",
    "Rezan the Red",
    "Queen Jaguar",
    "Black Tie"
]