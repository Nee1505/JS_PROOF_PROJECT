/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.


 let NFTs=[];//Array to store multiple variables


 //function containing the properties or metadata of the nfts
function mintNFT(id,name,credits,type) {
    const NFT_metadata={
        "Course_Id": id,
        "Course_Name": name,
        "Credits":credits,
        "Course_Type": type
    }
    NFTs.push(NFT_metadata);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for(let i=0; i<NFTs.length;i++)
        {
            console.log(i+1 ," NFT ");
            console.log("Course id : ", NFTs[i].Course_Id);
            console.log("Course Name : ", NFTs[i].Course_Name);
            console.log("Credits : ", NFTs[i].Credits);
            console.log("Course Type : ", NFTs[i].Course_Type);
            console.log("\n");

        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total No. of NFTs : ",NFTs.length);
}

// call your functions below this line
mintNFT(101,'Python',4,'Practical');
mintNFT(102,'Maths',3,'Theory');
mintNFT(103,'DBMS',4,'Hybrid');
mintNFT(104,'Aptitude',3,'Theory');
mintNFT(105,'Soft Skills ',2,'Practical');

listNFTs();

getTotalSupply();