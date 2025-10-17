

document.getElementById('btn-mision').addEventListener('click', mostrarMision);

const mensajes = {
    1: { img: 'images/img1.png', texto: 'sinceramente no sé cómo lo haces, pero con solo hablarme cambias mi día, haces que Todo parezca más bonito y especial' },
    2: { img: 'images/img2.png', texto: 'siEmpre quiero que estés aquí a mi lado para poder abrazarte y sentir tu amor, y que entiendas que todo lo que siento por ti, es real' },
    3: { img: 'images/img3.png', texto: 'podría pasar horas hablándote y no cansarme, o quedarme callada contigo y sentirme acompañada igual, a lo mejor es rAro, pero la verdad es que contigo hasta el silencio se vuelve bonito' },
    4: { img: 'images/img4.png', texto: 'tu risa y tu voz son lo que más me gusta escuchar, y adMirarte es lo que más me gusta hacer' },
    5: { img: 'images/img5.png', texto: 'gracias por ser parte de mi vida, por entenderme, por escucharme, por hacerme reír y por darme todo ese cariño y amOr 🌷💘' }
};


let nivelesCompletos = 0;

function mostrarMision() {
    alert('Junta todas las pistas para desbloquear el regaloo');
}

function abrirModal(num) {
    const modal = document.getElementById('modal');
    document.getElementById('img-modal').src = mensajes[num].img;
    document.getElementById('texto-modal').innerText = mensajes[num].texto;
    modal.style.display = 'flex';
    if (!localStorage.getItem(`nivel${num}`)) {
        localStorage.setItem(`nivel${num}`, 'completo');
        nivelesCompletos++;
    }
}

function cerrarModal() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

function abrirContraseña() {
    let completos = 0;
    for (let i = 1; i <= 5; i++) {
        if (localStorage.getItem(`nivel${i}`)) completos++;
    }
    if (completos === 5) {
        document.getElementById('modal-contraseña').style.display = 'flex';
    } else {
        alert('Debes juntar todas las pistas antes de desbloquear el regalo ✨');
    }
}

function verificarContraseña() {
    const valor = document.getElementById('input-pass').value.trim();
    if (valor === 'TE AMO') {
        cerrarModal();
        document.getElementById('modal-final').style.display = 'flex';
    } else {
        alert('Contraseña incorrecta 💭 (Recuerda: en MAYÚSCULAS)');
    }
}
