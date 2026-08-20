let qoute =["The way to get started is to quit talking and begin doing.","Your time is limited, so don't waste it living someone else's life." ,"If you look at what you have in life, you'll always have more.","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,"Life is what happens when you're busy making other plans.","Spread love everywhere you go. Let no one ever come to you without leaving happier." ,"When you reach the end of your rope, tie a knot in it and hang on." ,"Always remember that you are absolutely unique. Just like everyone else.","Don't judge each day by the harvest you reap but by the seeds that you plant.","The future belongs to those who believe in the beauty of their dreams.","Tell me and I forget. Teach me and I remember. Involve me and I learn." ,"It does not matter how slowly you go as long as you do not stop."];
let element = document.getElementById("line");
let button = document.getElementById("button");
button.addEventListener("click", () => {
    let index = Math.floor(Math.random()*qoute.length);
    element.textContent = qoute[index];

}

)
