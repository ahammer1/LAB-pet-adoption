const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "Cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Dino",
      imageUrl: "https://th.bing.com/th/id/R.733595adcc37377bb9667b50da8102b4?rik=2Y14OufMo1HWMA&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2fplanetdinosaur%2fimages%2f7%2f78%2fAlectrosaurus.jpeg%2frevision%2flatest%3fcb%3d20130514061357&ehk=G4xN8BhCUlXZ8Xgv3M%2fQdk7Vvw5QiU7Ys5Ga9XW3f2Q%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "Dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "Dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "Dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Dino",
      imageUrl: "https://th.bing.com/th/id/OIP.dPNBG-RZl51LskunXPHO-QHaEo?pid=ImgDet&rs=1"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "Dino",
      imageUrl: "https://yt3.ggpht.com/a/AATXAJzZy-TXCQ9lK4PPsxe7t9mjCRxjEd0xiyLyMA=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "Dog",
      imageUrl: "https://th.bing.com/th/id/R.424861dbcf2cccc0f9ed2fb12197b4cb?rik=sVYa19PYF%2feOyg&pid=ImgRaw&r=0"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "Cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "Cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Green",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "Dino",
      imageUrl: "https://vignette.wikia.nocookie.net/dinocolosseum/images/b/bd/Giganotosaurus.jpg/revision/latest?cb=20181011110841"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "Cat",
      imageUrl: "https://cdn.pixabay.com/photo/2017/05/15/09/59/cat-2314325_960_720.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "Dino",
      imageUrl: "https://yt3.ggpht.com/a/AATXAJxAt45Wh_iGPd4xP9cVLuophFO-Z8ko-9fckA=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Dog",
      imageUrl: "https://th.bing.com/th/id/OIP.yv1mDvJDT16jF2XxM3LE7gHaFj?pid=ImgDet&rs=1"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "Cat",
      imageUrl: "https://th.bing.com/th/id/OIP.rHYDwobnkLP7uf8cT47o1QHaE8?pid=ImgDet&rs=1"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "Dino",
      imageUrl: "https://wallpapercave.com/wp/wp7630371.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "Cat",
      imageUrl: "https://th.bing.com/th/id/R.55023ef720a6ed1a13244850358f8988?rik=%2bZjLlagAOS%2fd1A&riu=http%3a%2f%2fblogs.columbian.com%2fcat-tales%2fwp-content%2fuploads%2fsites%2f43%2f2017%2f12%2fOrangeCat1.jpg&ehk=Yliv%2b5sMPDDX%2b2lzugsicMw1Dn2IkUNkJgM4tKarS3k%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "Dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "Dog",
      imageUrl: "https://th.bing.com/th/id/OIP.FcJ-P4b65Z3KTC9bYCdYpwHaEo?pid=ImgDet&rs=1"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "Cat",
      imageUrl: "https://i5.walmartimages.com/asr/6eddc74d-5d0c-4d9c-b2d8-ba242d26d250_1.07ce637f2cd0b3a30f134243b2415bb8.jpeg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "Dog",
      imageUrl: "https://breedingbusiness.com/wp-content/uploads/2019/06/yellow-dog-names.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "Dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "Cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "Dino",
      imageUrl: "https://webstockreview.net/images/clipart-dinosaur-raptor-dinosaur-4.gif"
    }


  ];

const renderToDom = (divId, htmlToRender) => {
const selectedDiv =document.querySelector(divId);

selectedDiv.innerHTML=htmlToRender
};


const app = document.querySelector("#app");

const cardsOnDom = (pets) => {
let domString = "";
for (const pet of pets) {  
domString +=
`<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <h6 class="card-text1">${pet.type}</h6>
      <p class="card-text2">${pet.specialSkill}</p>
      <p class="card-text3">${pet.color}</p>
      <a href="#" class="btn btn-primary">Click Here to Adopt </a>
    </div>
  </div>
  `

}
renderToDom("#app",domString);
}
//app.innerHTML = domStrings

const filterfunction (pets, type) {
  const typeArr = [];


  for (const pet of pets) {
    if (pet.type === 'typeStr') {
      typeArr.push(pet);
    }
  }
  return typeArr;
}

const showCatsButton = document.querySelector("#Cat");
const showDogsButton =document.querySelector("#Dog");
const showDinosButton =document.querySelector("#Dino"); 
const showAllButton =document.querySelector("#All");

showCatsButton.addEventListener("click", () => {
  const pets = filter(pets, "Cat");
  cardsOnDom(pets); 
})
showDogsButton.addEventListener("click", () => {
  const pets = filter(pets, "Dog");
  cardsOnDom(pets);
})
  showDinosButton.addEventListener("click", () => {
  const pets = filter(pets, "Dino");
  cardsOnDom(pets);
}) 
  showAllButton.addEventListener("click", () => {;
  cardsOnDom(pets);
});
