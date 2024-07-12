const addparagraphbtn=document.getElementById("add-paragraph");
const removeparagraphbtn=document.getElementById("remove-paragraph");
const container = document.getElementById('container');

addparagraphbtn.addEventListener('click',myfunc);

function myfunc(){
    const newparagraph=document.createElement("p");
    container.appendChild(newparagraph);
    newparagraph.textContent="This is a new paragraph"

    //This line belows adds eventlisteners to each newly added paragraph
    newparagraph.addEventListener('click', function() {
        this.style.backgroundColor = 'yellow';
    });
}

const paragraphs = document.getElementsByTagName('p');
removeparagraphbtn.addEventListener('click',()=>{
    if (paragraphs.length > 0) {
        const lastParagraph = paragraphs[paragraphs.length - 1];
        container.removeChild(lastParagraph);
    }
});



