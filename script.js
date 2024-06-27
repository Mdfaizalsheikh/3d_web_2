document.getElementById("changeColorBtn").addEventListener("click", changeColors);

function changeColors() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];
    document.querySelectorAll(".interactive").forEach((el) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        el.setAttribute("color", color);
    });
}

document.querySelector('#spaceship').addEventListener('click', function () {
    alert('This is a spaceship exploring the universe.');
});
