document.addEventListener("DOMContentLoaded", function () {
  let iconDrop = document.getElementById("iconDropMobile");
  let contentDrop = document.getElementById("contentDropMobile");
  cekUkuranLayar();
  function cekUkuranLayar() {
    if (window.innerWidth <= 1024) {
      contentDrop.style.display = "none";
      iconDrop.src = "aset/gambar/icons8-menu-100 (4).png";
    } else {
      contentDrop.style.display = "flex";
    }
  }
  window.addEventListener("resize", function () {
    cekUkuranLayar();
  });
  iconDrop.addEventListener("click", function () {
    if (contentDrop.style.display == "none") {
      contentDrop.style.display = "block";
      iconDrop.src = "aset/gambar/icons8-cancel-100.png";
    } else {
      contentDrop.style.display = "none";
      iconDrop.src = "aset/gambar/icons8-menu-100 (4).png";
    }
  });

  function autoScrol() {
    let card = document.getElementById("card");
    let container = document.getElementById("containerSlide");
    let dot = document.getElementsByClassName("dot");
    let goScroll;
    let index = 0;
    
    function dotActive(index) {
      for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove("dotActive");
      }
      dot[index].classList.add("dotActive");
    }
    dotActive(0);
    function gass() {
      goScroll = Math.floor(card.offsetWidth + 20);
        if (index < dot.length - 1) {
          index++;
          console.log(index);
        } else {
          index = 0;
          console.log(index);
        }
        dotActive(index);
        container.scrollLeft = index * goScroll;
    }

    setInterval(gass, 2500);
  }
  autoScrol();

  function nexpage() {
    let data = document.getElementsByClassName("card-home2");
    let halAktif = 0;
    let dataPerHal = 6;
    function tampilDataHal(hal) {
      let awalIndex = hal  * dataPerHal;
      let akhirIndex = awalIndex + dataPerHal;
      for (let i = 0; i < data.length; i++) {
        data[i].classList.remove("dispalyBlock");
      }
      for (let i = awalIndex; i < akhirIndex; i++) {
        data[i].classList.add("dispalyBlock");
      }
    }
    function setButtonActive(index) {
      let semuaTombol = document.getElementsByClassName("button-home2");
      for (let i = 0; i < semuaTombol.length; i++) {
        semuaTombol[i].classList.remove("activeButton");
      }
      semuaTombol[index].classList.add("activeButton");
    }
    function navigasiHal() {
      let jumlahData = data.length;
      let jumlahHal = Math.ceil(jumlahData / dataPerHal);
      let buttonprev = document.getElementById("prev");
      let buttonnext = document.getElementById("next");
      let pagination = document.getElementById("pagination");
      let containerBerita = document.getElementById("sectionHome2");
      pagination.innerHTML = "";
      for (let i = 0; i < jumlahHal; i++) {
        let button = document.createElement("button");
        button.classList.add("button-home2");
        button.textContent = i+1;
        button.addEventListener("click", function () {
          setButtonActive(i);
          containerBerita.scrollIntoView();
          halAktif = i;
          tampilDataHal(i);
        });
        pagination.appendChild(button);
      }
      buttonprev.addEventListener("click", function () {
        if (halAktif > 0) {
          halAktif--;
          setButtonActive(halAktif);
          containerBerita.scrollIntoView();
          tampilDataHal(halAktif);
        }
      });

      buttonnext.addEventListener("click", function () {
        if (halAktif < jumlahHal-1) {
          halAktif++;
          setButtonActive(halAktif);
          containerBerita.scrollIntoView();
          tampilDataHal(halAktif);
        }
      });
    }
    tampilDataHal(0);
    navigasiHal();
    setButtonActive(0);
  }
  nexpage();
});

document.addEventListener("DOMContentLoaded", function () {
  function hideShow() {
    let judul = document.getElementsByClassName("judul-ppdb1");
    let container = document.getElementsByClassName("div-ppdb1");
    let content = document.getElementsByClassName("ul-ppdb1");
    let icon = document.getElementsByClassName("icondrop-ppdb1");
    for (let i = 0; i < judul.length; i++) {
      judul[i].addEventListener("click", function () {
        if (container[i].style.height == "100%") {
          container[i].style.height = "0px";
          content[i].style.transform = "translateY(-100%)";
          icon[i].style.transform = "rotate(0deg)";
        } else {
          container[i].style.height = "100%";
          content[i].style.transform = "translateY(-6%)";
          icon[i].style.transform = "rotate(180deg)";
          for (let j = 0; j < judul.length; j++) {
            if (j != i) {
              container[j].style.height = "0px";
              content[j].style.transform = "translateY(-100%)";
              icon[j].style.transform = "rotate(0deg)";
            }
          }
        }
      });
    }
  }
  hideShow();
});

document.addEventListener("DOMContentLoaded", function () {
  function pendaftaran() {
    let judulPPDB = document.querySelectorAll(".col1-ppdb3 p");
    let formDaftar = document.querySelectorAll(".form-ppdb3");
    let nextButton = document.querySelector(".btnNext-ppdb3");
    let i = 0;

    function tampilkanGambar() {
      let fileInput = document.querySelectorAll('.inputFile');
      let imgTampilan = document.querySelectorAll('.previewFile');;
      for (let i = 0; i < fileInput.length; i++){
        fileInput[i].addEventListener('change', function () {
          if (fileInput[i].files) {
            imgTampilan[i].src = URL.createObjectURL(fileInput[i].files[0]);
          } 
        })
      }
    }
    function tampilkanForm(index) {
      for (let j = 0; j < formDaftar.length; j++) {
        formDaftar[j].style.display = "none";
      }
      formDaftar[index].style.display = "flex";
      judulPPDB[index].style.cssText ="border-color: var(--warnaKuning); color:var(--warnaKuning)";
      if (index != 0) {
        judulPPDB[index - 1].style.cssText = "border-color: var(--warnaBiru); color:var(--warnaBiru)";
      }
      if (index != formDaftar.length - 1) {
        nextButton.innerHTML = "Selanjutnya";
      } else {
        nextButton.innerHTML = "Simpan Form";
        tampilkanGambar();
      }
    }
    tampilkanForm(i);
    nextButton.addEventListener("click", function () {
      let hasil = confirm("Pastikan data yang anda masukan sudah benar! \nApakah data sudah benar?"
      );
      if (hasil) {
        i++;
      }
      if (i < formDaftar.length) {
        tampilkanForm(i);
      }
    });
  }
  pendaftaran();
});

document.addEventListener('DOMContentLoaded', function () {
  function layananPPDB() {
    let elementclick = document.getElementById('layananPPDB');
    let content = document.getElementById('contentDropPPDB');
    let appdb = document.getElementById('aPPDB');
    let iconDrop = document.getElementById("iconDropMobile");
    let contentDrop = document.getElementById("contentDropMobile");
    elementclick.addEventListener('click', function () {
      if (contentDrop.style.display =='none') {
        iconDrop.click(); 
      }
      content.classList.add('displayPPDB');
      appdb.addEventListener('mouseenter', function () {
        content.classList.remove('displayPPDB');
      })
    });
  }
  layananPPDB();
})